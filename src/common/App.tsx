import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "../common/pages/NotFound";
import { Route } from "../common/types";
import { SinglePost } from "../business/post/pages/SinglePost";
import { Posts } from "../business/post/pages/Posts";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../technical/queryClient";
import "./translations";

const router = createBrowserRouter([
  { path: Route.Posts, element: <Posts />, errorElement: <NotFound /> },
  { path: Route.SinglePost, element: <SinglePost /> },
]);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
