import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ search }) => `/books/?searchTerm=${search}`,
    }),
    getBooksFilters: builder.query({
      query: () => `/books`,
    }),
  }),
});

export const { useGetBooksQuery, useGetBooksFiltersQuery } = bookApi;
