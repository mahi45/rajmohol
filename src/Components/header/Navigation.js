import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }

    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }


    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm">
                    <div className="container">
                        <NavbarBrand href="/">Rajmohol Restaurant</NavbarBrand>
                        <NavbarToggler onClick={this.navToggle} />
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav className="me-auto" navbar>
                                <NavItem>
                                    {/* <NavLink href="/" className="active">Home</NavLink> */}
                                    <Link to="/" className="nav-link active">Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/menu" className="nav-link">Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/about" className="nav-link">About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;