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
      query: (search) => `/books?searchTerm=${search}`,
    }),

    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useCreateBookMutation,
} = bookApi;
