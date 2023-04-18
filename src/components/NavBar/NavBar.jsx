import "../../style/NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <li>
        <h2>LOGO</h2>
      </li>
      <ul className="container-nav-products">
        <li>
          <p>PRODUCTOS</p>
        </li>
        <li>
          <p>CATEGORIAS</p>
        </li>
        <li>
          <p>CONTACTO</p>
        </li>
      </ul>
      <ul className="container-nav-logos">
        <li>
          <img
            className="logo"
            src="https://media.discordapp.net/attachments/968164817351352401/1019429149221322813/icons8-trabajadores-masculinos-64.png"
            alt="logo persona"
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
