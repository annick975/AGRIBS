import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Offers from "./components/Offers/Offers";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Signup from "./pages/Signup/signup";
function App() {
  return (
    <>
     <Router>
      <header>
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </header>
      <Home />
      <About />
      <Offers />
      <Contact />
      <FAQ />
      <Footer />
     
      
      </Router>
    </>
  );
}

export default App;
