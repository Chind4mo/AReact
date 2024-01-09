import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../logo/logo";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary NavBar">
            <Container className="contNav">
                <Logo />
                <div>
                    <ul className="categorias">
                        <li><NavLink to="categoria/Caros">Caros</NavLink></li>
                        <li><NavLink to="categoria/Baratos">Baratos</NavLink></li>
                        <li><NavLink to="categoria/Intermedios">Intermedios</NavLink></li>
                    </ul>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <NavLink to="/cart">
                    <CartWidget />
                </NavLink>
            </Container>
        </Navbar>
    );
}

export default NavBar;