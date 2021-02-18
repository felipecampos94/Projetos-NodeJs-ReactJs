import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './Menu.css';

export default function Menu() {
    return (
        <Navbar className="NavClass" color="faded" light expand="md">
            <NavbarBrand href="/">React Bootstrap Example</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/">
                        Home
                    </NavLink>
                </NavItem>

                <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/allusers">
                        Users
                    </NavLink>
                    <NavLink className="font-weight-bold" href="/">
                        Products
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );

}