import "./App.css";
import Header from "./Header";
import About from "./About";
import Services from "./services";
import Registrationform from "./Registrationform";
import Error from "./Error";
import Body1 from "./Body1";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body1 />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/Registrationform",
        element: <Registrationform />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
