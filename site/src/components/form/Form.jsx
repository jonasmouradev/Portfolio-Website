import "../form/form.css";
import ContactBtn from "../contactBtn/ContactBtn";
import { useState } from "react";

export default function Form() {
  const [budget, setBudget] = useState("");

  const handleBudgetChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value / 100);
    setBudget(formattedValue);
  };
  return (
    <section className="form">
      <h1 className="formTitle">
        Vamos discutir <spam>Seu Projeto</spam>
      </h1>
      <p className="formSubtitle">
        Vamos fazer algo novo, diferente e mais atrativo
      </p>
      <form className="formInputs">
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Telefone" />
        <input
          type="text"
          placeholder="Orçamento"
          value={budget}
          onChange={handleBudgetChange}
        />
        <textarea className="textArea" placeholder="Mensagem"></textarea>
      </form>
      <ContactBtn />
    </section>
  );
}
