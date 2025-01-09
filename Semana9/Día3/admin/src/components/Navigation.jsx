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
            <NavDropdown title="Productos">
              <NavDropdown.Item>
                <Link to="/createproduct" className="nav-link">
                  Crear Producto
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="#" className="nav-link">
                  Info
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
