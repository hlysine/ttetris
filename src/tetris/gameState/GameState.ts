import Tetrominos, { TetrominoType, RotationDirection } from '../Tetrominos';
import Vector from '../utils/Vector';
import '../utils/Array';
import PieceGenerator from '../PieceGenerator';
import Tetromino from '../Tetromino';
import GameInput, { IsRotation } from '../GameInput';
import TypedEvent from '../utils/TypedEvent';
import GameAchievement, { AchievementType, BackToBackEligible } from '../GameAchievement';
import HoldInfo from './HoldInfo';
import VisibleGameState from './VisibleGameState';
import GlobalConfiguration from '../GlobalConfiguration';

export default class GameState {
  public Grid: TetrominoType[][];

  public readonly Configuration: GlobalConfiguration;

  public Falling: Tetromino | null;

  public Hold: HoldInfo | null;

  /**
   * Whether to disallow hold, reset when a new tetromino is dequeued
   */
  public BlockHold: boolean;

  /**
   * see Consts/TICK_RATE
   */
  public TicksElapsed: number;

  /**
   * Index of the next piece in queue
   */
  public PieceIndex: number;

  /**
   * The number of consecutive line clear
   */
  public Combo: number;

  /**
   * Used for detecting back-to-back achievements
   */
  public LastAchievement: GameAchievement | null;

  public IsDead: boolean;

  #pieces: PieceGenerator;

  #achievement: TypedEvent<GameAchievement>;

  #dead: TypedEvent<void>;

  /**
   * Create a GameState from visible information, allowing gameplay simulations
   * @param visible A VisibleGameState
   */
  public constructor(visible: VisibleGameState);

  /**
   * Create a normal game state
   * @param configuration The global configuration
   * @param pieceSeed The seed for the internal PieceGenerator
   * @param pieceIndex The starting index of the piece queue
   * @param falling The currently falling tetromino
   * @param hold The tetromino type of the held piece
   * @param elapsed The ticks elapsed since game start
   * @param blockHold Whether the hold action is disallowed
   * @param combo The number of consecutive line clear
   */
  public constructor(
    configuration: GlobalConfiguration,
    pieceSeed?: number,
    pieceIndex?: number,
    falling?: Tetromino,
    hold?: HoldInfo | null,
    elapsed?: number,
    blockHold?: boolean,
    combo?: number,
    lastAchievement?: GameAchievement | null,
    isDead?: boolean
  );

  public constructor(
    configurationOrState: GlobalConfiguration | VisibleGameState,
    pieceSeed: number | undefined = undefined,
    pieceIndex = 0,
    falling: Tetromino | null = null,
    hold: HoldInfo | null = null,
    elapsed = 0,
    blockHold = false,
    combo = 0,
    lastAchievement: GameAchievement | null = null,
    isDead = false
  ) {
    if (configurationOrState instanceof VisibleGameState) {
      const state = configurationOrState;
      this.Configuration = state.Configuration;
      this.Grid = new Array(state.GridHeight).fill(null).map(() => new Array(state.GridWidth).fill(TetrominoType.None));
      if (state.Grid)
        state.Grid.forEach((arr, i) =>
          arr.forEach((p, j) => {
            this.Grid[i][j] = p;
          })
        );
      this.Falling = state.Falling;
      this.Hold = state.Hold;
      this.BlockHold = state.BlockHold;
      this.TicksElapsed = state.TicksElapsed;
      this.#pieces = new PieceGenerator(state.PieceQueue, state.PieceIndex);
      this.PieceIndex = state.PieceIndex;
      this.Combo = state.Combo;
      this.LastAchievement = state.LastAchievement;
      this.IsDead = state.IsDead;
    } else {
      this.Configuration = configurationOrState;
      this.Grid = new Array(this.GridHeight).fill(null).map(() => new Array(this.GridWidth).fill(TetrominoType.None));
      this.Falling = falling;
      this.Hold = hold ?? null;
      this.BlockHold = blockHold;
      this.TicksElapsed = elapsed;
      this.#pieces = new PieceGenerator(pieceSeed);
      this.PieceIndex = pieceIndex;
      this.Combo = combo;
      this.LastAchievement = lastAchievement;
      this.IsDead = isDead;
    }
    this.#achievement = new TypedEvent();
    this.#dead = new TypedEvent();
  }

  /**
   * Get an object containing only information that is currently visible to the player
   * @returns An object representing game states that are currently visible to the player
   */
  public GetVisibleState(): VisibleGameState {
    return new VisibleGameState(
      this.Configuration,
      this.PieceQueue,
      this.PieceIndex,
      this.Grid,
      this.Falling,
      this.Hold,
      this.TicksElapsed,
      this.BlockHold,
      this.Combo,
      this.LastAchievement?.Clone(),
      this.IsDead
    );
  }

  public get GridWidth(): number {
    return this.Configuration.GridWidth;
  }

  public get GridHeight(): number {
    return this.Configuration.GridHeight;
  }

  public get PlayfieldHeight(): number {
    return this.Configuration.PlayfieldHeight;
  }

  public get Achievement(): TypedEvent<GameAchievement> {
    return this.#achievement;
  }

  public get Dead(): TypedEvent<void> {
    return this.#dead;
  }

  public get PieceQueue(): TetrominoType[] {
    return this.#pieces.GetRange(this.PieceIndex, this.Configuration.QueueLength);
  }

  public Get(x: number, y: number): TetrominoType | null;

  public Get(p: Vector): TetrominoType | null;

  public Get(xOrP: number | Vector, y: number | undefined = undefined): TetrominoType | null {
    let px: number;
    let py: number;
    if (xOrP instanceof Vector) {
      px = xOrP.X;
      py = xOrP.Y;
    } else if (y !== undefined) {
      px = xOrP;
      py = y;
    } else {
      return null;
    }
    if (px < 0 || py < 0 || px >= this.GridWidth || py >= this.GridHeight) return null;
    return this.Grid[py][px];
  }

  /**
   * Test whether the currently falling piece, or another falling piece is valid
   * for this game grid.
   * @param falling Optionally specify a falling piece to be tested
   * @returns Whether the falling piece is not out of bounds and is not overlapping with locked pieces
   */
  public IsPieceValid(falling: Tetromino | undefined = undefined): boolean {
    if (falling) return !falling.Points.some(p => (this.Get(p) ?? TetrominoType.I) !== TetrominoType.None);
    if (this.Falling) return !this.Falling.Points.some(p => (this.Get(p) ?? TetrominoType.I) !== TetrominoType.None);
    return true;
  }

  public HasHold(holdInfo: HoldInfo | null | undefined = undefined): boolean {
    if (holdInfo === undefined) return this.Hold !== null && this.Hold.Type !== TetrominoType.None;
    return holdInfo !== null && holdInfo.Type !== TetrominoType.None;
  }

  /**
   * Attempt to dequeue a piece from the queue and start dropping it
   * @returns Whether the dequeue is successful
   */
  public DequeuePiece(): boolean {
    if (this.Falling !== null) return false;
    this.Falling = Tetromino.Spawn(
      this.#pieces.Get(this.PieceIndex),
      this.Configuration,
      this.TicksElapsed,
      this.PieceIndex
    );
    this.PieceIndex++;
    this.BlockHold = false;
    if (!this.IsPieceValid()) {
      this.IsDead = true;
      this.#dead.Emit();
      return false;
    }
    return true;
  }

  /**
   * Attempt to hold the current piece
   * @returns Whether the hold was successful
   */
  public HoldPiece(): boolean {
    if (this.Falling === null) return false;
    if (this.BlockHold) return false;
    let hold = this.Hold;
    this.Hold = new HoldInfo(this.Falling.Type, this.PieceIndex - 1);
    if (!this.HasHold(hold)) {
      const newPiece = this.#pieces.Get(this.PieceIndex);
      if (newPiece === TetrominoType.None) {
        // no more pieces in queue, possible when this game state is a simulation
        this.Hold = hold;
        return false;
      }
      hold = new HoldInfo(newPiece, this.PieceIndex);
      this.PieceIndex++;
    }
    if (hold) this.Falling = Tetromino.Spawn(hold.Type, this.Configuration, this.TicksElapsed, hold.PieceIndex);
    this.BlockHold = true;
    this.Falling.LastAction = GameInput.Hold;
    return true;
  }

  /**
   * Clear lines that are full and emit events
   * @param lastPiece The most recently locked piece
   */
  public ClearLines(lastPiece: Tetromino | undefined = undefined): void {
    const linesCleared: number[] = [];
    let type: AchievementType | null = null;
    if (lastPiece?.Type === TetrominoType.T && IsRotation(lastPiece.LastAction)) {
      // check for T-spin
      const corners = [
        [0, 0],
        [2, 0],
        [0, 2],
        [2, 2],
      ].reduce(
        (prev, [x, y]) =>
          this.Get(lastPiece.Position.X + x, lastPiece.Position.Y + y) !== TetrominoType.None ? prev + 1 : prev,
        0
      );
      if (corners >= 3) {
        // is a T-spin
        // check if its mini
        const isMini = [
          [1, 0],
          [0, 1],
          [1, 2],
          [2, 1],
        ].some(
          ([x, y]) =>
            !lastPiece.InternalPoints.find(p => p.X === x && p.Y === y) &&
            this.Get(lastPiece.Position.X + x, lastPiece.Position.Y + y) !== TetrominoType.None
        );
        if (isMini) type = AchievementType.TSpinMini;
        else type = AchievementType.TSpin;
      }
    }
    for (let i = this.GridHeight - 1; i >= 0; i--) {
      if (!this.Grid[i].some(t => t === TetrominoType.None)) {
        this.Grid.splice(i, 1);
        this.Grid.push(new Array(this.GridWidth).fill(TetrominoType.None));
        linesCleared.push(i);
      }
    }
    if (linesCleared.length === 0) {
      this.Combo = 0;
      if (type === null) return;
    } else if (linesCleared.length > 1 && type === AchievementType.TSpinMini) {
      type = AchievementType.TSpin;
    }
    const achievement = new GameAchievement(
      linesCleared,
      type ?? AchievementType.LineClear,
      this.Combo,
      this.LastAchievement ? BackToBackEligible(this.LastAchievement) : false
    );
    if (linesCleared.length > 0) this.Combo++;
    if (!this.Grid.some(row => row.some(c => c !== TetrominoType.None))) {
      achievement.Type = AchievementType.PerfectClear;
    }
    achievement.BackToBack = BackToBackEligible(achievement) && achievement.BackToBack;
    const last = achievement.Clone();
    this.#achievement.Emit(achievement);
    this.LastAchievement = last;
  }

  /**
   * Attempt to lock the currently falling piece.
   * @returns Whether the lock was successful
   */
  public LockPiece(): boolean {
    if (this.Falling === null) return false;
    while (!this.IsPieceValid()) {
      this.Falling.Position.Y++;
    }
    this.Falling.Points.forEach(p => {
      this.Grid[p.Y][p.X] = this.Falling?.Type ?? TetrominoType.None;
    });
    this.ClearLines(this.Falling);
    if (this.Falling.Points.map(p => p.Y).min() >= this.PlayfieldHeight) {
      this.IsDead = true;
      this.#dead.Emit();
    }
    this.Falling = null;
    return true;
  }

  /**
   * Attempt to rotate the currently falling piece in the specified direction,
   * taking wall kick into consideration.
   * @param direction Direction of rotation, clockwise or counter-clockwise
   * @returns Whether the rotation was successful
   */
  public RotatePiece(direction: RotationDirection = RotationDirection.CW): boolean {
    if (this.Falling === null) return false;
    const kick = Tetrominos[this.Falling.Type].wallKick[this.Falling.Rotation][direction].find(p => {
      const falling = this.Falling?.Clone();
      if (!falling) return false;
      falling.Rotate(direction);
      falling.Position = falling.Position.Add(p);
      return this.IsPieceValid(falling);
    });
    if (!kick) return false;
    this.Falling.Rotate(direction);
    this.Falling.Position = this.Falling.Position.Add(kick);
    this.Falling.LastActionTick = this.TicksElapsed;
    this.Falling.ActionCount++;
    this.Falling.LastAction = direction === RotationDirection.CW ? GameInput.RotateCW : GameInput.RotateCCW;
    return true;
  }

  public ShiftPiece(offset: number): boolean {
    if (this.Falling === null) return false;
    const falling = this.Falling.Clone();
    falling.Position.X += offset;
    if (!this.IsPieceValid(falling)) return false;
    this.Falling = falling;
    this.Falling.LastActionTick = this.TicksElapsed;
    this.Falling.ActionCount++;
    this.Falling.LastAction = offset > 0 ? GameInput.ShiftRight : GameInput.ShiftLeft;
    return true;
  }

  public CanPieceDrop(falling: Tetromino | undefined = undefined): boolean {
    let f: Tetromino;
    if (falling) {
      f = falling.Clone();
    } else if (this.Falling) {
      f = this.Falling.Clone();
    } else return false;
    f.Position.Y--;
    return this.IsPieceValid(f);
  }

  public SoftDropPiece(isAuto = false): boolean {
    if (this.Falling === null) return false;
    if (!this.CanPieceDrop()) return false;
    this.Falling.Position.Y--;
    this.Falling.LastActionTick = this.TicksElapsed;
    this.Falling.ActionCount = 0;
    if (isAuto) this.Falling.DropTick = this.TicksElapsed;
    else this.Falling.LastAction = GameInput.SoftDrop;
    return true;
  }

  public HardDropPiece(falling: Tetromino | undefined = undefined): boolean {
    let f: Tetromino;
    if (falling) {
      f = falling;
    } else if (this.Falling) {
      f = this.Falling;
    } else return false;
    const lastPos = f.Position.Y;
    while (this.IsPieceValid(f)) {
      f.Position.Y--;
    }
    f.Position.Y++;
    // Hard drop should only be recorded if the drop distance > 0
    if (lastPos !== f.Position.Y) f.LastAction = GameInput.HardDrop;
    if (f === this.Falling) {
      return this.LockPiece();
    }

    return true;
  }

  public Tick(): void {
    if (this.IsDead) return;
    if (this.Falling === null) {
      this.DequeuePiece();
    } else {
      if (this.TicksElapsed - this.Falling.DropTick >= this.Configuration.DropInterval) this.SoftDropPiece(true);
      if (this.TicksElapsed - this.Falling.LastActionTick >= this.Configuration.LockDelay && !this.CanPieceDrop())
        this.LockPiece();
    }

    this.TicksElapsed++;
  }
}
