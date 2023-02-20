import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: true,
  reducers: {
    toggle: (state: boolean) => !state,
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
