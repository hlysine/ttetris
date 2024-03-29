import Game from '../game/Game';
import GameState from '../gameState/GameState';
import Player from '../player/Player';
import Container from './components/drawables/Container';
import DependencyContainer from './dependencyInjection/DependencyContainer';
import Graphics from './Graphics';
import InputHandler from './components/inputHandler/InputHandler';
import AnimationManager from './components/AnimationManager';
import LocalConfiguration from './LocalConfiguration';
import Inject from './dependencyInjection/InjectDecorator';

export default class Renderer extends Container {
  public readonly Game: Game;

  public readonly Player: Player;

  public readonly GameState: GameState;

  public readonly InputHandler: InputHandler;

  public readonly AnimationManager: AnimationManager;

  protected localConfig: LocalConfiguration = null!;

  public constructor(game: Game, player: Player, gameState: GameState, inputHandler: InputHandler) {
    super();
    this.Game = game;
    this.Player = player;
    this.GameState = gameState;
    this.Add((this.InputHandler = inputHandler), (this.AnimationManager = new AnimationManager()));
  }

  @Inject(LocalConfiguration)
  private loadRenderer(localConfig: LocalConfiguration): void {
    this.localConfig = localConfig;
    this.Width = localConfig.Width;
    this.Height = localConfig.Height;
  }

  protected override registerDependencies(dependencyContainer: DependencyContainer): void {
    dependencyContainer.Register(this.Game, Game);
    dependencyContainer.Register(this.Player, Player);
    dependencyContainer.Register(this.GameState, GameState);
    dependencyContainer.Register(this.InputHandler, InputHandler);
    dependencyContainer.Register(this.AnimationManager, AnimationManager);
  }

  protected override applyTransform(graphics: Graphics): void {
    // todo: remove coordinate transform
    const { p5 } = graphics;
    p5.resetMatrix();
    p5.scale(1, -1);
    p5.translate(0, -this.Height);

    super.applyTransform(graphics);
  }

  #lastTick = 0;

  protected override setup(graphics: Graphics): void {
    const { p5 } = graphics;
    p5.noStroke();
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.textSize(16);
    p5.background(this.localConfig.BackgroundColor);
    p5.textFont('Noto Sans Mono');
    super.setup(graphics);
    this.#lastTick = performance.now();
  }

  protected override update(): void {
    const timestamp = performance.now();
    console.log('render update');
    this.Game.Tick(timestamp - this.#lastTick);
    this.#lastTick = timestamp;
  }

  protected override draw(graphics: Graphics): void {
    const { p5 } = graphics;
    p5.background(this.localConfig.BackgroundColor);
    p5.textFont('Noto Sans Mono');
    super.draw(graphics);
  }
}
