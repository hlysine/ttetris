import MultiplayerGame, { Participant } from '../game/MultiplayerGame';
import DisableInputHandler from './components/inputHandler/DisableInputHandler';
import MultiplayerRenderer from './MultiplayerRenderer';

export default class MultiplayerSpectatingRenderer extends MultiplayerRenderer {
  public constructor(game: MultiplayerGame, participant: Participant) {
    super(game, participant, new DisableInputHandler());
  }
}