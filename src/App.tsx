import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Testimonial from "./pages/Testimonial";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bookink" element={<Booking />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
