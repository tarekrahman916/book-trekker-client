import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation({
      query: (bookData) => ({
        url: `/books`,
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["books"],
    }),
    getBooks: builder.query({
      query: ({ search, page }) => `/books?searchTerm=${search}&page=${page}`,
      providesTags: ["books"],
    }),

    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, bookData }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: bookData,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
