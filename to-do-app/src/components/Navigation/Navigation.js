import './Navigation.css';
import { Navbar, Container, Nav, Button, Modal } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar bg="dark" className="navbar" variant="dark" fixed="top" data-testid="navigation-1">
                <Container>
                    <Navbar.Brand>To-Do</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/To-Do">Tasks</Nav.Link>
                        <Nav.Link href="/To-Do/completed">Completed</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Button variant="secondary" className="gray-button" onClick={handleShow}>?</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>About This Site</Modal.Title>
                </Modal.Header>
                <Modal.Body>Add, change, organize, and complete tasks on your to-do list.</Modal.Body>
                <Modal.Body>Please Note: This site is for demonstration purposes only. Data will not persist.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="gray-button" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <br></br>
            <br></br>
            <br></br>
            <Outlet />
        </>
    )
}