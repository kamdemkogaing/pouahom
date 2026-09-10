import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

import About from "./pages/About";
import Activities from "./pages/Activities";
import Board from "./pages/Board";
import Contact from "./pages/Contact";
import Datenschutz from "./pages/Datenschutz";
import Documents from "./pages/Documents";
import Gallery from "./pages/Gallery";
import History from "./pages/History";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Meetings from "./pages/Meetings";
import News from "./pages/News";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/association" element={<About />} />

          <Route path="/history" element={<History />} />

          <Route path="/board" element={<Board />} />

          <Route path="/activities" element={<Activities />} />

          <Route path="/news" element={<News />} />

          <Route path="/meetings" element={<Meetings />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/documents" element={<Documents />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/impressum" element={<Impressum />} />

          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
