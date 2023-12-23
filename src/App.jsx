import "./App.css";
import Footer from "./assets/Footer";
import Header from "./assets/header";
import Hero from "./assets/Hero";
import Middle from "./assets/Middle";
import Slider from "./assets/Slider";
import Socials from "./assets/Socials";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Middle />
      <Slider />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
