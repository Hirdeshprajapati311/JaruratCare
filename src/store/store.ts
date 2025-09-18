import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./slices/toggleSlice"
import patientReducer from "./slices/patientsSlice"
import cardReducer from "./slices/cardSlice";

export const store = configureStore({
  reducer: {
    toggle:toggleReducer,
    patient: patientReducer,
    card:cardReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//