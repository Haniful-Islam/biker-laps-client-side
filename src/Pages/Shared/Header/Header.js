import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import bikes1 from '../../../images/logo/bikes1.png';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={bikes1} width="35" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="home#bikes">BikeInventory</Nav.Link>
                            <Nav.Link href="home#bikeservicing">BikeServicing</Nav.Link>
                            <Nav.Link href="home#LatestBike">LatestBike</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="all-items">All Items</Nav.Link>
                            {
                                user && <>
                                <Nav.Link as={Link} to="addbike">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="manage">Manage Item</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className="btn btn-info btn-sm text-white" onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link as={Link} to="login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;