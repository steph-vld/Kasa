import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/pages/about/about";
import NotFound from "./components/pages/notFound/notfound";
import Lodgings from "./components/pages/lodgings/lodging";
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";

function routes() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/P7_Kasa" element={<Home />} />
        <Route path="/Lodgings/:id" element={<Lodgings />} />
        <Route path="/apropos" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default routes;
