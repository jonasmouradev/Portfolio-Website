import Form from "./components/form/Form";
import Hero from "./components/hero/Hero";
import Nav from "./components/navbar/Nav";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import "./index.css";

function App() {
  return (
    <div className="content">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
