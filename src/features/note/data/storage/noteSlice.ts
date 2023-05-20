import {createSlice} from '@reduxjs/toolkit';
import {NoteState} from '../model';

const initialState = new NoteState();

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {},
});

export default noteSlice.reducer;
