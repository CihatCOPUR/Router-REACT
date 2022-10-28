import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About"
import Services from "./pages/Services"
import Html from "./pages/Html";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}>
          <Route path="html" element={<Html/>}/>
          </Route>
        <Route path="/about" element={ <About />}/>
        <Route path="/services" element={ <Services />}/>
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
