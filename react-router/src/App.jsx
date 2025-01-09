import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";

function App() {
  return (
    <div className="app d-flex flex-column">
      <Header />
      <div className="flex-fill">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
