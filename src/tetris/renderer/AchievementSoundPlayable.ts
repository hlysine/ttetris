import p5Types from 'p5';
import { Constructor, MixinArgs } from '../utils/Mixin';
import { GetSFX, AchievementSFX } from './Helper';
import { Drawable } from './Renderer';
import { Howl } from 'howler';
import { GameStateUsable } from './GameStateUsable';
import GameAchievement from '../GameAchievement';

export type AchievementSoundPlayable = Constructor<{
  p5Setup(p5: p5Types, canvasParentRef: Element): void,
  p5Draw(p5: p5Types): void,
  ConfigureAchievementSoundPlayable(): void,
}>;

export default function AchievementSoundPlayable<TBase extends Drawable & GameStateUsable>(Base: TBase): TBase & AchievementSoundPlayable {
  return class AchievementSoundPlayable extends Base {
    #achievementQueue: GameAchievement[];
    #sounds: Map<AchievementSFX, Howl>;

    constructor(...args: MixinArgs) {
      super(...args);
      this.#achievementQueue = [];
      this.#sounds = new Map<AchievementSFX, Howl>();
    }

    ConfigureAchievementSoundPlayable(): void {
      if (this.State === null) {
        console.error('ConfigureAchievementSoundPlayable called before this.State is assigned. Beware of the call order of Configure_ functions.');
        return;
      }
      this.State.Achievement.on((achievement) => this.#achievementQueue.push(achievement));
    }

    p5Setup(p5: p5Types, canvasParentRef: Element): void {
      super.p5Setup(p5, canvasParentRef);
      Object.entries(AchievementSFX).forEach(([, value]) => this.#sounds.set(
        value,
        new Howl({
          src: [value],
        }),
      ));
    }

    p5Draw(p5: p5Types): void {
      super.p5Draw(p5);
      while (this.#achievementQueue.length > 0) {
        const result = this.#achievementQueue.shift();
        console.log(result);
        if (!result) break;
        const sfx = GetSFX(result);
        if (!sfx) continue;
        sfx.forEach(s => this.#sounds.get(s)?.play());
      }
    }
  };
}