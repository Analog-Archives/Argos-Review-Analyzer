"use client"

// components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// stylesheet
import Styles from './navbar.module.css'

const TopNavbar: React.FC<{}> = () => {
    return (
        <>
            <Navbar expand="lg" className={`${Styles.wrapper} bg-none`}>
                <Container>
                    <Navbar.Brand
                        href="#home"
                        style={{
                            color: 'white',
                            fontSize: 14
                        }}>Argos Review Analyzer</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                className={Styles.nav_link}
                                href="">Disclaimer</Nav.Link>
                            <Nav.Link
                                className={Styles.nav_link}
                                href="">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default TopNavbar