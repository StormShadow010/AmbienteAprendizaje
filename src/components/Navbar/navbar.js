import * as React from "react";
import { Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export const NavegationWeb = ()=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="navbar">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/actividades">
                    <Nav.Link>Actividad 1</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                        Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}