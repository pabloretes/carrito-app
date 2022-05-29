import logo from "../logo.svg";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active"  href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
