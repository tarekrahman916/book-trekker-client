import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface IBook {
  search: string | null;
  genre: string;
  publicationYear: number | null;
}

const initialState: IBook = {
  search: "",
  genre: "",
  publicationYear: null,
};

const BookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    searchState: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { searchState } = BookSlice.actions;

export default BookSlice.reducer;
