import React, { useEffect, useState } from 'react';
import { useStates } from 'use-states';
import Sketch from 'react-p5';
import Player from '../tetris/player/Player';
import HumanPlayer from '../tetris/player/HumanPlayer';
import LocalMutiplayerGame from '../tetris/game/LocalMultiplayerGame';
import MultiplayerMainRenderer from '../tetris/renderer/MultiplayerMainRenderer';
import MultiplayerSpectatingRenderer from '../tetris/renderer/MultiplayerSpectatingRenderer';
import HeightMapAI from '../tetris/player/ai/heightMap/HeightMapAI';
import MediumRenAI from '../tetris/player/ai/choiceRating/MediumRenAI';
import MediumTetrisAI from '../tetris/player/ai/choiceRating/MediumTetrisAI';
import BasicChoiceRatingAI from '../tetris/player/ai/choiceRating/BasicChoiceRatingAI';
import RenderHost from '../tetris/renderer/RenderHost';
import LocalConfiguration from '../tetris/renderer/LocalConfiguration';
import Vector from '../tetris/utils/Vector';
import GlobalConfiguration from '../tetris/GlobalConfiguration';
import AIConfiguration from '../tetris/player/ai/AIConfiguration';

export default function LocalMultiGame() {
  const [mainRenderer, setMainRenderer] = useState<RenderHost>();
  const [renderers, setRenderers] = useState<RenderHost[]>();
  const data = useStates({
    rounds: 0,
    wins: null,
  });
  useEffect(() => {
    data.rounds++;
    const seed = Math.floor(Math.random() * 2 ** 32);
    const player1: Player = new HumanPlayer();
    const aiPlayers: Player[] = [];
    const aiConfig = new AIConfiguration();
    aiPlayers.push(new MediumRenAI(aiConfig));
    aiPlayers.push(new MediumTetrisAI(aiConfig));
    aiPlayers.push(new BasicChoiceRatingAI(aiConfig));
    aiPlayers.push(new HeightMapAI(aiConfig));
    const game: LocalMutiplayerGame = new LocalMutiplayerGame(new GlobalConfiguration(), [
      { player: player1, seed },
      ...aiPlayers.map(p => ({ player: p, seed })),
    ]);
    const renderer1: RenderHost = new RenderHost(
      new MultiplayerMainRenderer(game, game.Participants[0]),
      new LocalConfiguration()
    );
    const aiRenderers: RenderHost[] = [];
    game.Participants.slice(1).forEach(p =>
      aiRenderers.push(
        new RenderHost(
          new MultiplayerSpectatingRenderer(game, p).With(c => {
            c.Scale = new Vector(0.5, 0.5);
          }),
          new LocalConfiguration({
            soundVolume: 0.1,
            width: renderer1.LocalConfig.Width / 2,
            height: renderer1.LocalConfig.Height / 2,
          })
        )
      )
    );
    setMainRenderer(renderer1);
    setRenderers(aiRenderers);
    game.GameEnded.Once(() => {
      setTimeout(() => {
        let w: number[] | null = data.wins?.slice();
        if (!w) w = new Array(game.Participants.length).fill(0);
        w[game.Participants.findIndex(p => !p.state.IsDead)]++;
        data.wins = w;
      }, 1000);
    });
    game.StartGame();
    return () => {
      setMainRenderer(undefined);
      setRenderers(undefined);
    };
  }, [data.wins]);
  return (
    <div
      className="min-h-screen w-screen relative"
      style={{ backgroundColor: renderers?.[0].LocalConfig.BackgroundColor }}
    >
      <p className="absolute top-4 left-4 z-10 text-6xl text-green-500">Round {data.rounds}</p>

      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        {mainRenderer ? (
          <div key={`${data.rounds}-${0}`} className="text-center">
            <Sketch
              setup={mainRenderer.SetupHandler}
              draw={mainRenderer.DrawHandler}
              keyPressed={mainRenderer.KeyPressedHandler}
              keyReleased={mainRenderer.KeyReleasedHandler}
            />
            <p className="mb-0 text-lg text-white">{data.wins ? `${data.wins[0]} wins` : null}</p>
          </div>
        ) : null}
        <div className="flex justify-center items-center flex-wrap flex-shrink">
          {renderers?.map((r, idx) => (
            // todo: use a better key
            // eslint-disable-next-line react/no-array-index-key
            <div key={`${data.rounds}-${idx + 1}`} className="text-center">
              <Sketch
                setup={r.SetupHandler}
                draw={r.DrawHandler}
                keyPressed={r.KeyPressedHandler}
                keyReleased={r.KeyReleasedHandler}
              />
              <p className="mb-0 text-lg text-white">{data.wins ? `${data.wins[idx + 1]} wins` : null}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
