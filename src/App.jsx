import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Cart from "./Cart";
import NotFound from "./NotFound";

function App() {

  return (
    <>
      <Header/>
      <Outlet/>      {/* This Outlet loads the children based on route provided in url */}
      <Footer/>
    </>
  );
  
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>,
        errorElement: <NotFound/>,
      },
      {
        path: "/home",
        element: <Body/>,
        errorElement: <NotFound/>,
      },
      {
        path: "/about",
        element: <About/>,
        errorElement: <NotFound/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
        errorElement: <NotFound/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
        errorElement: <NotFound/>,
      }
    ],
    errorElement: <NotFound/>,
  },
]);

export { appRouter };
export default App;