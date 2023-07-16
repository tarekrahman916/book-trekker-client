import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface IBook {
  search: string | null;
  genre: string | null;
  publicationYear: string | null;
}

const initialState: IBook = {
  search: "",
  genre: "",
  publicationYear: "",
};

const BookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    searchState: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    genreFilter: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    publicationYearFilter: (state, action: PayloadAction<string>) => {
      state.publicationYear = action.payload;
    },
  },
});

export const { searchState, genreFilter, publicationYearFilter } =
  BookSlice.actions;

export default BookSlice.reducer;
