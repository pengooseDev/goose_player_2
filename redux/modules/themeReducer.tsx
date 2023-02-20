import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: true,
  reducers: {
    toggle: (state: boolean, action: PayloadAction) => {
      state = !state;
    },
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
