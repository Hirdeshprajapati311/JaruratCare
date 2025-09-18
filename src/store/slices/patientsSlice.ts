import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPatientData } from "../../lib/api";
import type { Patient } from "../../lib/types";


export const getPatients = createAsyncThunk("patients/getPatients", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchPatientData();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to fetch patients")
  }
});

interface PatientState{
  patients: Patient[];
  loading: boolean;
  error : string | null;
}

const initialState: PatientState = {
  patients: [],
  loading: false,
  error: null
}

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    addPatient: (state, action) => {
      const newPatient = { ...action.payload, id: state.patients.length + 1 };
      state.patients.push(newPatient);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPatients.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(getPatients.fulfilled, (state, action) => {
      state.loading = false;
      if (state.patients.length === 0) {
        state.patients = action.payload
      }
    }).addCase(getPatients.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
  }
})

export const { addPatient } = patientsSlice.actions;

export default patientsSlice.reducer;