import logo from "../logo.svg";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     
            <a class="navbar-brand" href="#"><img src={logo} alt="logo" width="30" height="24" class="d-inline-block align-text-top" />
                Marriact
            </a>
        
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active"  href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Nosotros</a>
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
