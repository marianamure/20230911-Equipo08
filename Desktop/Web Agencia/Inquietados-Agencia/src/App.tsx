import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import MotionBlurCursor from "./components/MotionBlurCursor";
import Footer from "./components/Footer";
import useScrollTop from "./components/useScrollTop";
function App() {
  useScrollTop();
  return (
    <>
      <Navbar />
      <>
        <MotionBlurCursor />
        <Outlet />
      </>
      <Footer />
    </>
  );
}

export default App;
