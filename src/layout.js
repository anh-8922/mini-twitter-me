import { Outlet, Link } from "react-router-dom";
import './styles.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SearchBar from "./Components/serachBar";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import AddNewMessage from "./Components/addNewPost";
export default function Layout() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div id="layout">
            <div id="header">
                <Navbar bg="dark" variant="dark" style={{padding: "0"}}>
                    <Container style={{width: "20rem", margin: "1rem", padding: "0"}}>
                    <Navbar.Brand href="#home">
                        
                        Clone the Twitter
                    </Navbar.Brand>
                    </Container>
                    <SearchBar id="search-bar"/>
                </Navbar>
                
            </div>
            <div id="main">
                <nav id="nav-bar">
                    <Nav defaultActiveKey="/home" className="flex-column" id="nav-item">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link eventKey="link-1" href="user" >People</Nav.Link>
                        <Button  onClick={handleShow} id="add-button">
                            Add new post
                        </Button>
                        <Modal show={show} onHide={handleClose} animation={false} style={{height: "20rem"}}>
                            <Modal.Header closeButton>
                            <Modal.Title>Add new post</Modal.Title>
                            </Modal.Header>
                            <Modal.Body ><AddNewMessage/></Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        
                    </Nav>
                </nav>
                
                <Outlet />
            </div>
            
            
            
        </div>
      )

}