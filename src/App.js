import MainPage from "./pages/main/MainPage";
import { useColorScheme } from "@mui/material";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const MarketPage = lazy(() => import("./pages/market/MarketPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <div>page not found</div>,
  },
  {
    path: "/market/:title",
    element: (
      <Suspense>
        <MarketPage />
      </Suspense>
    ),
    errorElement: <div>page not found</div>,
  },
]);

function App() {
  const { mode } = useColorScheme();
  if (!mode) {
    return null;
  } else {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}

export default App;
