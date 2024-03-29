import GameInput from '../GameInput';
import GameInputResult from '../GameInputResult';
import Player from '../player/Player';
import { RotationDirection } from '../Tetrominos';
import TypedEvent from '../utils/TypedEvent';
import MultiGameState from '../gameState/MultiGameState';
import MultiplayerGame, { Participant } from './MultiplayerGame';
import GarbageEntry from '../gameState/GarbageEntry';
import GlobalConfiguration from '../GlobalConfiguration';

export default class LocalMutiplayerGame extends MultiplayerGame {
  public Participants: Participant[];

  #handle: number | null;

  #input: TypedEvent<GameInputResult>;

  #isGameEnded: boolean;

  #gameEnded: TypedEvent<void>;

  public constructor(
    configuration: GlobalConfiguration,
    players: { player: Player; seed?: number | MultiGameState }[]
  ) {
    super(configuration);
    this.#handle = null;
    this.Participants = players.map(p => ({
      player: p.player,
      state: p.seed instanceof MultiGameState ? p.seed : new MultiGameState(this.Configuration, p.seed),
    }));
    this.Participants.map(p => p.state).forEach(state =>
      state.Achievement.On(achievement => {
        const garbage = achievement.Garbage;
        const states = this.Participants.map(p => p.state).filter(s => s !== state);
        states.forEach(s => s.GarbageMeter.push(new GarbageEntry(garbage.universal, s.TicksElapsed)));

        // TODO: target selection
        const availableTargets = states.filter(x => !x.IsDead);
        const target = availableTargets[Math.floor(Math.random() * availableTargets.length)];
        if (target) target.GarbageMeter.push(new GarbageEntry(garbage.targeted, target.TicksElapsed));
      })
    );
    this.#input = new TypedEvent();
    this.#isGameEnded = false;
    this.#gameEnded = new TypedEvent();
  }

  public get IsGameEnded(): boolean {
    if (this.#isGameEnded) return true;
    if (this.Participants.filter(p => !p.state.IsDead).length <= 1) {
      this.#isGameEnded = true;
      return true;
    }
    return false;
  }

  public get Input(): TypedEvent<GameInputResult> {
    return this.#input;
  }

  public get GameEnded(): TypedEvent<void> {
    return this.#gameEnded;
  }

  #cumulativeDelta = 0;

  public override Tick(delta: number): void {
    this.#cumulativeDelta += delta;
    if (this.#cumulativeDelta < 1000 / this.Configuration.TickRate) {
      return;
    }
    this.#cumulativeDelta %= 1000 / this.Configuration.TickRate;
    if (!this.GameRunning) return;
    console.log('game ticked');
    this.Participants.forEach(p => {
      if (p.state.IsDead) return;
      p.state.Tick();
      if (p.state.IsDead) return;
      const input = p.player.Tick(p.state.GetVisibleState());
      console.log('player input ticked');
      const falling = p.state.Falling;
      let success = false;
      switch (input) {
        case GameInput.HardDrop:
          success = p.state.HardDropPiece();
          break;
        case GameInput.Hold:
          success = p.state.HoldPiece();
          break;
        case GameInput.RotateCW:
          success = p.state.RotatePiece(RotationDirection.CW);
          break;
        case GameInput.RotateCCW:
          success = p.state.RotatePiece(RotationDirection.CCW);
          break;
        case GameInput.ShiftLeft:
          success = p.state.ShiftPiece(-1);
          break;
        case GameInput.ShiftRight:
          success = p.state.ShiftPiece(1);
          break;
        case GameInput.SoftDrop:
          success = p.state.SoftDropPiece(false);
          break;
        default:
          break;
      }
      if (input !== GameInput.None) {
        this.#input.Emit(new GameInputResult(p.state.TicksElapsed, input, success, falling, p.player));
      }
    });
    if (!this.#isGameEnded && this.IsGameEnded) {
      this.#gameEnded.Emit();
    }
  }
}
