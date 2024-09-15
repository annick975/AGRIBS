import Header from "./components/Header/header";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Offers from "./components/Offers/Offers";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Home />
      <About />
      <Offers />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
