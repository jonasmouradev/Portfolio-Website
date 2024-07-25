export default function Form() {
  return (
    <>
      <h1>Vamos discutir Seu Projeto</h1>
      <p>Vamos fazer algo novo, diferente e mais atrativo</p>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Telefone" />
        <input type="number" placeholder="Orçamento" />
        <textarea placeholder="Mensagem"></textarea>
        <button>Enviar</button>
      </form>
    </>
  );
}
