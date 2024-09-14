import Header from "./components/Header/header";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Offers from "./components/Offers/Offers";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Home />
      <About />
      <Offers />
    </>
  );
}

export default App;
