import { useEffect } from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Nav />
      <Home />
    </>
  );
}

export default App;
