import { combineEpics, createEpicMiddleware } from 'redux-observable';

const epics = combineEpics();

const rootEpic = createEpicMiddleware(epics);

export default rootEpic;
