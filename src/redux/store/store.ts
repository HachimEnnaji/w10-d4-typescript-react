import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../reducers/fetchData";

const store = configureStore({
  reducer: {
    fetchArticles: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
