import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TodoItem = {
  id: string;
  content: string;
  status: string;
};

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004" }),
  endpoints: (builder) => ({
    getTodoItems: builder.query<TodoItem[], undefined>({
      query: () => {
        return "/posts";
      },
    }),
  }),
});

export const { useGetTodoItemsQuery } = todoApi;
