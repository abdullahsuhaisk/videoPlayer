import { buildActionCreator } from '../propsUtils';
import {
  actionTypes as baseActionTypes,
  actions as baseActions
} from '../base/baseActions';

const PREFIX = 'LAYOUT';

const LAYOUT_WIDTH = `${PREFIX}::WIDTH`;
const LAYOUT_HEIGHT = `${PREFIX}::HEIGHT`;
const LAYOUT_BASE_WIDTH = `${PREFIX}::BASE_WIDTH`;
const LAYOUT_BASE_HEIGHT = `${PREFIX}::BASE_HEIGHT`;
const LAYOUT_SAFE_AREA = `${PREFIX}::SAFE_AREA`;
const LAYOUT_ASPECT_RATIO = `${PREFIX}::ASPECT_RATIO`;

const onWidth = buildActionCreator(LAYOUT_WIDTH);
const onHeight = buildActionCreator(LAYOUT_HEIGHT);
const onBaseWidth = buildActionCreator(LAYOUT_BASE_WIDTH);
const onBaseHeight = buildActionCreator(LAYOUT_BASE_HEIGHT);
const onSafeArea = buildActionCreator(LAYOUT_SAFE_AREA);
const onAspectRatio = buildActionCreator(LAYOUT_ASPECT_RATIO);

export const actionTypes = {
  LAYOUT_WIDTH,
  LAYOUT_HEIGHT,
  LAYOUT_BASE_WIDTH,
  LAYOUT_BASE_HEIGHT,
  LAYOUT_SAFE_AREA,
  LAYOUT_ASPECT_RATIO,
  ...baseActionTypes
};

export const actions = {
  onWidth,
  onHeight,
  onBaseWidth,
  onBaseHeight,
  onSafeArea,
  onAspectRatio,
  ...baseActions
};
