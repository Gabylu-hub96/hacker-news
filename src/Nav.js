import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation({ posts, setSearchInput }) {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearchChange}
            />
            <button
              className="btn btn-success"
              type="submit"
              onClick={handleSubmit}>
              Search
            </button>
          </form>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
