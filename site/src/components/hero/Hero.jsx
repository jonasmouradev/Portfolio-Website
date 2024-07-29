import ContactBtn from "../contactBtn/ContactBtn";
import "../hero/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <aside className="heroText">
        Me chamo Jonas Moura e esse é o meu portfólio.
      </aside>
      <img src="https://placehold.co/200x130" />
      <ContactBtn />
    </section>
  );
}
