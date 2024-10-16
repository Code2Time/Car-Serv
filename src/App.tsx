import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Testimonial from "./pages/Testimonial";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookink" element={<Booking />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
