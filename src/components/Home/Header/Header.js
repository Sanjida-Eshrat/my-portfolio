import React, {useState} from 'react';
 import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
// import { FaBars } from 'react-icons/fa'; 
// import {
//   Nav,
//   NavContainer, 
//   NavLogo,
//   NavItem,
//   NavLinks,
//   NavMenu,
//   MobileIcon,
// } from './HeaderStyles';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    // const [colorChange, setColorChange] = useState(false);
    // const changeNavbarColor = () =>{
    //    if(window.scrollY >= 80){
    //      setColorChange(true);
    //    }
    //    else{
    //      setColorChange(false);
    //    }
    // };
    // window.addEventListener('scroll', changeNavbarColor)
    return (
        <>
            <Navbar  expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand className="items">
                    <h3 style={{color:'White'}}>Sanjida Eshrat</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <NavLink to="" className="items"><li> Home</li></NavLink>
                <NavLink to="" className="items"><li> Contact Me</li></NavLink>
                {/* Download Resume */}
                <NavLink className="text-decoration-none text-white fs-6 ms-3 fw-bold btn   btn-sm items rounded-pill" to="" style={{backgroundColor:'#f39792'}}><i class="fas fa-sign-in-alt"></i> Resume</NavLink>
                </Nav>
                </Navbar.Collapse>   
            </Container>
            </Navbar>
           
            {/* <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
           <NavContainer>
              <NavLogo>Sanjida Eshrat</NavLogo>
              <MobileIcon>
               <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks>About</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">Services</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">Events</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">Contact</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">Sign In</NavLinks>
                </NavItem>
              </NavMenu>
           </NavContainer>
        </Nav> */}
        </>
    );
};

export default Header;