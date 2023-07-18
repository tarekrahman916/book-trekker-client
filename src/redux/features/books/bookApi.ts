import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation({
      query: (bookData) => ({
        url: `/books`,
        method: "POST",
        body: bookData,
      }),
    }),
    getBooks: builder.query({
      query: ({ search, limit }) =>
        `/books/?searchTerm=${search}&limit=${limit}`,
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
  useCreateBookMutation,
} = bookApi;
