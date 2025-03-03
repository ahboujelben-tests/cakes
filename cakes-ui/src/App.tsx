import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router";
import { Toaster } from "sonner";
import PWABadge from "./PWABadge.tsx";
import { Button } from "./components/ui/button.tsx";
import { Cakes } from "./pages/cakes.tsx";
import { CreateCake } from "./pages/createCake.tsx";

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
          <Header />
          <div className="fixed overflow-auto w-full bottom-0 top-26 lg:top-28 lg:pt-4">
            <Routes>
              <Route path="/" element={<Cakes />} />
              <Route path="/create" element={<CreateCake />} />
            </Routes>
          </div>
        </div>
        <Toaster />
        <PWABadge />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

function Header() {
  const currentRoute = useLocation().pathname;

  return (
    <div className="flex items-center justify-between bg-sidebar-primary p-8">
      <h1 className=" text-sidebar-primary-foreground font-extrabold tracking-tight text-3xl lg:text-4xl text-center">
        Awesome Cakes!
      </h1>
      <Link to={currentRoute === "/create" ? "/" : "/create"}>
        <Button className="cursor-pointer" variant="secondary">
          {currentRoute === "/create" ? "Back to cakes" : "Create Cake"}
        </Button>
      </Link>
    </div>
  );
}

export default App;
