import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
const Home = (name) => {
    console.log(name.name, name.toString(), JSON.stringify(name))
  return (
      <>
    <Navbar fixed="top" expand="lg" variant="dark" bg="dark">
    <Container>
      <Navbar.Brand href="#home">EduCatalyst</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">{name.name}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default Home