import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LandingLayout from "./layouts/LandingLayout";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "/manoj",
        element: <h1>Manoj</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
// function App() {
//   return <SignIn />;
// }~

export default App;
