import {combineReducers} from '@reduxjs/toolkit';
import {noteReducer} from '../../../features/note/data/storage';

const appReducer = combineReducers({
  note: noteReducer,
});

export type AppState = ReturnType<typeof appReducer>;

export default appReducer;
