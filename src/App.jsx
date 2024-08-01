import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home />, title: "Home" },
      { path: "about", element: <About />, title: "About" },
      { path: "portfolio", element: <Portfolio />, title: "Portfolio" },
      { path: "contact", element: <Contact />, title: "Contact" },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
