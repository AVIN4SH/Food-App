import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./Contact";
import Cart from "./Cart";
import NotFound from "./NotFound";
//import About from "./About";
//If we wish to bundle our app's one section separate from one section so that it is not loaded until it is opened we use lazy loading like given below:
import React, { lazy, Suspense } from "react";

const About = lazy(() => import("./About"));
//we also need to wrap around this About component inside <Suspense></Suspense> Component that we imported so that there is no error in opening about page link.
//This results in bundling this page apart from others, This is practically used in large scale applications for efficiency and faster response in separate sections based on several parameters.
//This is done mainly for large components that make our other part of app slow and this also helps in optimization.
/*
  This concept is also known as:
    -chunking
    -code splitting
    -dynamic bundling
    -lazy loading
    -on demand loading
    -dynamic import
*/

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
        element: <Suspense fallback={<h1 className="text-4xl text-center text-red-500 min-w-full min-h-96 flex flex-col justify-center">Please Wait, Loading...</h1>}><About/></Suspense>,
        //This Suspense in used with lazy loading and this fallback is the placeholder which renders until the code is not available. [fallback attribute takes jsx inside its value.]
        //we can also pass shimmer ui to load unitl the page loads
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