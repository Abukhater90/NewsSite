
import "/src/App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SharedLayOut from "./components/SharedComponents/SharedLayOut";
import Home from "./pages/Home";
import About from "./pages/About";
import ArtPage from "./pages/ArtPage";




export default function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayOut />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "artpage",
          element: <ArtPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}
