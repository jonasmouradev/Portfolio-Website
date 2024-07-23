import "../navbar/nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <span>
        <box className="J">J</box>onas Moura
      </span>
      <a href="/">contact sales</a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="menuIcon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <ul className="navItems">
        <li>
          <a href="/">Página Inicial</a>
        </li>
        <li>
          <a href="/about">Sobre</a>
        </li>
        <li>
          <a href="/contact">Contato</a>
        </li>
      </ul>
    </nav>
  );
}
