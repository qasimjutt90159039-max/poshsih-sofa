import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Furniture from "./pages/Furniture";
import SofaCollection from "./pages/SofaCollection";
import HomeInterior from "./pages/HomeInterior";
import Craftsmanship from "./pages/Craftsmanship";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-16">
      <span className="text-xs uppercase tracking-[0.3em] text-brand-deepRose font-bold mb-2">
        Error 404
      </span>
      <h1 className="font-editorial text-4xl sm:text-6xl font-bold text-brand-charcoal mb-4">
        Page Not Found
      </h1>
      <p className="text-sm sm:text-base text-brand-mutedGray max-w-md mb-8 font-light">
        The showroom page you are looking for might have moved or does not exist.
      </p>
      <Link
        to="/"
        className="bg-brand-charcoal hover:bg-brand-darkRose text-brand-offWhite px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-offWhite text-brand-charcoal selection:bg-brand-pink selection:text-brand-darkRose">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/sofa-collection" element={<SofaCollection />} />
          <Route path="/home-interior" element={<HomeInterior />} />
          <Route path="/craftsmanship" element={<Craftsmanship />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
