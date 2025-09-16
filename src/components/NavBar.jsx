import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";

function NavbarMenu() {
  const [scrolled,setscroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Navbar expand="lg" fixed="top" className={`z-10 w-full transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/50 backdrop-blur-none"
      }`}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Cabinet Cohen"
            className="h-12 w-auto d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto ">
            <Nav.Link as={Link} to="/" className="px-3">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/cabinet" className="border-start px-3">Cabinet</Nav.Link>
            <Nav.Link as={Link} to="/domaines" className="border-start px-3">Domaines</Nav.Link>
            <Nav.Link as={Link} to="/honoraires" className=" border-start px-3">Honoraires</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
