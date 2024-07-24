import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

interface IInitState {
  isLoading: boolean;
  contactform:
    | {
        email?: string;
        dispName?: string;
      }
    | undefined;
}

// GET STATE FROM SESSION
const getState = () => {
  const init = {
    isLoading: false,
    contactform: JSON.parse(sessionStorage.getItem("@CONTACT") ?? "null"),
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
        contactform: {email: "", dispName: "", pwd: ""},
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
