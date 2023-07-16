import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ search }) => `/books/?searchTerm=${search}`,
    }),
  }),
});

export const { useGetBooksQuery } = bookApi;
