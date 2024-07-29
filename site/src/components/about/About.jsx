import "../about/about.css";
import ContactBtn from "../contactBtn/ContactBtn";

export default function About() {
  return (
    <about className="about">
      <h1>Alguma coisa</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        tincidunt venenatis elit. Pellentesque suscipit vulputate felis in
        bibendum.
      </p>
      <div className="actions">
        <ContactBtn />
        <a href="https://www.google.com">Baixar Currículo</a>
      </div>
      <article className="stats">
        <spam>
          <h1>50+</h1>
          <p>Clientes satisfeitos</p>
        </spam>
        <spam>
          <h1>50+</h1>
          <p>Projetos completos</p>
        </spam>
        <spam>
          <h1>50+</h1>
          <p>Reviews recebidas</p>
        </spam>
      </article>
    </about>
  );
}
