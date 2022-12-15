import { createSlice } from '@reduxjs/toolkit';

interface InitialState {}

const initialState: InitialState = {};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {},
});

export const {} = financeSlice.actions;

export default financeSlice.reducer;
