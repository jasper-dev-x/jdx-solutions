import {configureStore} from "@reduxjs/toolkit";
import formStateSlice from "./formState";
import {useDispatch} from "react-redux";

// IS REFRESH NEEDED
export const isRefreshNeeded = (lastFetched?: string, limit: number = 0.5) => {
  if (!lastFetched) {
    return false;
  }
  const NOW = new Date().getTime();
  const LAST_FETCH = new Date(lastFetched).getTime();
  // TOTAL IN MIN => / 1000 ( FOR SEC ) / 60 ( FOR MIN )
  const TIME_LEFT = (NOW - LAST_FETCH) / 1000 / 60;
  const needed = TIME_LEFT > limit;

  if (needed) console.log("REFRESHED!", lastFetched);
  else console.log(`REFRESH IN: ${(limit - TIME_LEFT).toFixed(2)} minutes`);

  return needed;
};

export const store = configureStore({
  reducer: {
    formState: formStateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
