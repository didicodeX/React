import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   console.log(location);
  // }, [location])



  return (
    <div className="app d-flex flex-column">
      <Header />
      <div className="flex-fill">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration/>
    </div>
  );
}

export default App;
