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
import { ViewCake } from "./pages/viewCake.tsx";

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
          <Main>
            <Routes>
              <Route path="/" element={<Cakes />} />
              <Route path="/create" element={<CreateCake />} />
              <Route path="/cake/:id" element={<ViewCake />} />
            </Routes>
          </Main>
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
      <Link to="/">
        <h1 className=" text-sidebar-primary-foreground font-extrabold tracking-tight text-2xl sm:text-4xl text-center">
          Awesome Cakes!
        </h1>
      </Link>
      <Link to={currentRoute === "/" ? "/create" : "/"}>
        <Button className="cursor-pointer" variant="secondary">
          {currentRoute === "/" ? "Add cake" : "Back to cakes"}
        </Button>
      </Link>
    </div>
  );
}

const Main = ({ children }: { children: React.ReactNode }) => (
  <div className="fixed overflow-auto w-full bottom-0 top-26 sm:py-4">
    <div className="flex items-center flex-wrap justify-center gap-4 p-4">
      {children}
    </div>
  </div>
);

export default App;
