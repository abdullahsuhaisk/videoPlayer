import { buildActionCreator } from '../propsUtils';

const PREFIX = 'VIDEOPLAYER';

const ASYNC_OP_START = `${PREFIX}/ASYNC_OP_START`;
const ASYNC_OP_END = `${PREFIX}/ASYNC_OP_END`;
const ASYNC_OP_RESET_STATUS = `${PREFIX}/ASYNC_OP_RESET_STATUS`;
const VIDEOPLAYER_INIT = `${PREFIX}/INIT`;

const init = buildActionCreator(VIDEOPLAYER_INIT);
const startAsyncOp = buildActionCreator(ASYNC_OP_START);
const endAsyncOp = buildActionCreator(ASYNC_OP_END);
const resetAsyncOp = buildActionCreator(ASYNC_OP_RESET_STATUS);

export const actionTypes = {
  VIDEOPLAYER_INIT,
  ASYNC_OP_START,
  ASYNC_OP_END,
  ASYNC_OP_RESET_STATUS
};

export const actions = {
  init,
  startAsyncOp,
  endAsyncOp,
  resetAsyncOp
};
