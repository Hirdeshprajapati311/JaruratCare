import { createSlice } from "@reduxjs/toolkit";
import type { Patient } from "../../lib/types";

interface CardState{
  isCardOpen: boolean;
  selectedPatient: Patient | null;
}

const initialState: CardState = {
  isCardOpen: false,
  selectedPatient: null
}

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    openCard: (state, action) => {
      state.isCardOpen = true;
      state.selectedPatient = action.payload;
    },
    closeCard: (state) => {
      state.isCardOpen = false;
      state.selectedPatient = null;
    }
  }
})

export const { openCard, closeCard } = cardSlice.actions;

export default cardSlice.reducer