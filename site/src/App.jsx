import Form from "./components/form/Form";
import Hero from "./components/hero/Hero";
import Nav from "./components/navbar/Nav";
import Services from "./components/services/Services";
import "./index.css";

function App() {
  return (
    <div className="content">
      <Nav />
      <Hero />
      <Services />
      <Form />
    </div>
  );
}

export default App;
