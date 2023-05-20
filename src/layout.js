import { Outlet, Link } from "react-router-dom";
import './styles.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SearchBar from "./Components/serachBar";

export default function Layout() {
    //const [click, setClick] = useState(false);
    return (
        <div id="layout">
            <div id="header">
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">
                        
                        Clone the Twitter
                    </Navbar.Brand>
                    </Container>
                    <SearchBar/>
                </Navbar>
                
            </div>
            <div id="main">
                <nav id="nav-bar">
                    <Nav defaultActiveKey="/home" className="flex-column" id="nav-item">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link eventKey="link-1" href="user" >People</Nav.Link>
                        <Nav.Link eventKey="link-2" href="newpost">Add new post</Nav.Link>
                        
                    </Nav>
                </nav>
                
                <Outlet />
            </div>
            
            
            
        </div>
      )

}