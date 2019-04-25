import { buildActionCreator } from '../actionUtils';

export const LAYOUT_WIDTH = 'LAYOUT::WIDTH';
export const LAYOUT_HEIGHT = 'LAYOUT::HEIGHT';
export const LAYOUT_BASE_WIDTH = 'LAYOUT::BASE_WIDTH';
export const LAYOUT_BASE_HEIGHT = 'LAYOUT::BASE_HEIGHT';
export const LAYOUT_SAFE_AREA = 'LAYOUT::SAFE_AREA';
export const LAYOUT_ASPECT_RATIO = 'LAYOUT::ASPECT_RATIO';

const onWidth = buildActionCreator(LAYOUT_WIDTH);
const onHeight = buildActionCreator(LAYOUT_HEIGHT);
const onBaseWidth = buildActionCreator(LAYOUT_BASE_WIDTH);
const onBaseHeight = buildActionCreator(LAYOUT_BASE_HEIGHT);
const onSafeArea = buildActionCreator(LAYOUT_SAFE_AREA);
const onAspectRatio = buildActionCreator(LAYOUT_ASPECT_RATIO);

export const actions = {
  onWidth,
  onHeight,
  onBaseWidth,
  onBaseHeight,
  onSafeArea,
  onAspectRatio
};
