// fetchData.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleType } from "../../interfaces/BookInterface";

const initialState = {
  articles: [] as ArticleType[],
  loading: false,
  error: null as string | null,
};

const fetchDataSlice = createSlice({
  name: "fetchArticles",
  initialState,
  reducers: {
    fetchArticlesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchArticlesSuccess: (state, action: PayloadAction<ArticleType[]>) => {
      state.loading = false;
      state.articles = action.payload;
      state.error = null;
    },
    fetchArticlesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchArticlesRequest, fetchArticlesSuccess, fetchArticlesFailure } = fetchDataSlice.actions;
export default fetchDataSlice.reducer;
