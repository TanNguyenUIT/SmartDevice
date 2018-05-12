import { CHANGE_ROOT, PUSH_SCREEN } from './navTypes';

export const changeRoot = screen => ({ type: CHANGE_ROOT, payload: screen });
export const pushScreen = screen => ({ type: PUSH_SCREEN, payload: screen });
