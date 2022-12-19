import { createSlice } from '@reduxjs/toolkit';

interface FinanceState {
  value: number;
}

const initialState: FinanceState = {
  value: 0
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  }
});

export const { increment } = financeSlice.actions;

export default financeSlice.reducer;
