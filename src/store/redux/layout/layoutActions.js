import { buildActionCreator } from '../actionUtils';

export const LAYOUT_WIDTH = 'LAYOUT_WIDTH';
export const LAYOUT_HEIGHT = 'LAYOUT_HEIGHT';

const layoutWidth = buildActionCreator(LAYOUT_WIDTH);
const layoutHeight = buildActionCreator(LAYOUT_HEIGHT);

export const Actions = {
  layoutWidth,
  layoutHeight
};
