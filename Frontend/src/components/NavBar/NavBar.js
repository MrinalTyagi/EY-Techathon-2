import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './NavBar.css';

function NavBar() {
  return (
    <>
      <Navbar
        bg='light'
        variant='light'
        className='navbar-nav greenary-nav'
        sticky='top'
      >
        <Container>
          <div className='greenary-logo'></div>
          <Navbar.Brand href='#home' className='navbar-nav--brand'>
            Navbar
          </Navbar.Brand>
          {/* <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav> */}

          <div className='greenary-dropdown-menu'>
            <Navbar.Toggle aria-controls='navbar-dark-example' />
            <Navbar.Collapse
              id='navbar-dark-example'
              className='dropdown-menu-container'
            >
              <Nav className='dropdown'>
                <NavDropdown
                  id='nav-dropdown-dark-example'
                  title='State / UTs'
                  menuVariant='dark'
                  className='dropdown-item-container'
                  style={{ width: '100% !important' }}
                >
                  <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;