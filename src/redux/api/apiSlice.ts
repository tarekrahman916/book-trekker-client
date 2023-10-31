import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-trekker-server-sigma.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: ["books", "review"],
});
