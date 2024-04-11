import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Cart from "../components/Cart";
import About from "../components/About";
import Contact from "../components/Contact";

import "/src/style/style.css";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
