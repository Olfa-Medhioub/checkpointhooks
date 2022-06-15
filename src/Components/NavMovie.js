import { Navbar,Container,Nav } from 'react-bootstrap';
const NavMovie=()=>{
    return(
        <div>
            
              <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">MoviesNet</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Movies</Nav.Link>
                    <Nav.Link href="#pricing">Tv shows</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
        </div>
    )
}

export default NavMovie