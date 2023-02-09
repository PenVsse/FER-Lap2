import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext';
// import { NavLink } from 'react-bootstrap';

function CollapsibleExample() {
    const { nav, toggle, dark } = useContext(ThemeContext)
    return (

        <p className='switch-mode' href='#'
            style={{
                backgroundColor: nav.backgroundColor,
                color: nav.color,
                fontWeight: '550',
                outline: 'none'
            }} data-testid="toggle-theme-btn">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand style={{
                        color: nav.color,
                        fontWeight: '700',
                        outline: 'none'
                    }} href="#home">Film</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="#features" style={{ color: nav.color }} >Features</Nav.Link>
                            <Nav.Link href="#features" style={{ color: nav.color }} >Movie Lists</Nav.Link>
                            <Nav.Link href="#pricing" style={{ color: nav.color }} >Movie Trailers</Nav.Link>
                            <Nav.Link href="#features" style={{ color: nav.color }} >TV List</Nav.Link>
                            <Nav.Link href="#features" style={{ color: nav.color }} >Help</Nav.Link>

                            {/* <NavDropdown title='More' id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" style={{ color: nav.color }} >Movie Lists</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" style={{ color: nav.color }} >
                                    TV List
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" style={{ color: nav.color }} >Privacy Policy</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" style={{ color: nav.color }} >
                                    Help
                                </NavDropdown.Item>
                            </NavDropdown> */}

                        </Nav>
                        <Nav onClick={toggle}>
                            {!dark ? 'Dark' : 'Light'} mode
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </p >);
}

export default CollapsibleExample;