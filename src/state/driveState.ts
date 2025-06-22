import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IDrive} from "./schemas";

interface IInitState {
  isLoading: boolean;
  drive?: IDrive;
}

// GET STATE FROM SESSION
const getState = () => {
  const init: IInitState = {
    isLoading: false,
    drive: {name: "DEMO DRIVE", link: "...", accessCode: "0000"},
  };

  return init;
};

// INITIAL STATE
const initialState: IInitState = getState();

// INIT LOADING FOR
export const initLoadingFor = createAsyncThunk(
  "contact/initLoading",
  async ({duration}: {duration: number}) => {
    await new Promise(() => setTimeout(() => {}, duration));
    return;
  }
);

export const formSlice = createSlice({
  name: "formState",
  initialState,
  reducers: {
    resetState() {
      return {
        isLoading: false,
      };
    },
  },
  extraReducers: (builder) =>
    builder
      // INIT LOADING FOR
      .addCase(initLoadingFor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(initLoadingFor.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(initLoadingFor.rejected, (state) => {
        state.isLoading = false;
      }),
  // }),
});

export const {resetState} = formSlice.actions;

export default formSlice.reducer;
