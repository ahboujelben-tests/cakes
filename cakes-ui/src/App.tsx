import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import PWABadge from "./PWABadge.tsx";
import { Cakes } from "./pages/cakes.tsx";

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  mutationCache: new MutationCache(),
  defaultOptions: { mutations: { retry: false } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="bg-background relative">
          <h1 className="bg-sidebar-primary text-sidebar-primary-foreground font-extrabold tracking-tight text-4xl lg:text-5xl text-center p-8">
            Awesome Cakes!
          </h1>
          <div className="fixed overflow-auto w-full bottom-0 top-26 lg:top-28 lg:pt-4">
            <Cakes />
          </div>
        </div>
        <PWABadge />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
