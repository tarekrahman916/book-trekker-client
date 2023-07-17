import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ search }) => `/books/?searchTerm=${search}`,
    }),
    getBooksFilters: builder.query({
      query: () => `/books`,
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBooksFiltersQuery,
  useGetSingleBookQuery,
} = bookApi;
