import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  isMenuOpen: boolean;
}

const initialState: ToggleState = {
  isMenuOpen: false,
};


export const toggleSlice = createSlice({
  initialState,
  name: "toggle",
  reducers: {
    toggle: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  }
})

export const { toggle } = toggleSlice.actions;
export default toggleSlice.reducer;