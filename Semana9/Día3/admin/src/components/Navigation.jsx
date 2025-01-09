import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand>Admin</Navbar.Brand>
        {/* NavbarToggle que es el botón cuando colapse */}
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            {/* el title en NavDropdown indica que texto aparecerá en la barra de navegación */}
            <NavDropdown title="Productos">

                <Link to="/createproduct" className="dropdown-item">
                  Crear Producto
                </Link>

                <Link to="#" className="dropdown-item">
                  Info
                </Link>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
