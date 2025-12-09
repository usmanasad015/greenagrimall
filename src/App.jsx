import Home from "../components/home/Home";
import Gallery from "../components/Gallery";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "../components/header/Header";

function AnimatedRoutes() {
  const backgroundStyle = {
    backgroundImage: "url('/agrimall_onlylogo.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    minHeight: "100vh",
  };
  const location = useLocation();
  const isGalleryPage = location.pathname === "/gallery";

  return (
    <div className={isGalleryPage ? "gallery-background-image" : ""}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
