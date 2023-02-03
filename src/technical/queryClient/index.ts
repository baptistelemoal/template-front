import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: { retry: false },
    queries: {
      retry: false,
      staleTime: 60 * 1000, // keep stuff in memory 1 min by default
      refetchOnWindowFocus: false,
    },
  },
});
