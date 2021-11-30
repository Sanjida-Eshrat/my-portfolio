import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  banner from '../../../images/rsz_bg-n.jpg';

const Banner = () => {
    return (
        <div className="bg-light m-0 text-white container-fluid " 
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${banner})`,
            // backgroundImage: `url(${banner})`,
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
           }}>
            <Container fluid>
                <div className="text-center container top-banner" style={{paddingTop:'195px',paddingBlockEnd:'180px'}}>
                    <h1 className="pt-4 text-2">Hi! I'm <span style={{color:'#f39792'}}>Sanjida Eshrat</span></h1>
                    <h6>Junior Web Developer (MERN)</h6>
                    <Link to="">
                        <Button className="border-light btn-outline-info"  >Resume</Button>
                    </Link>
                </div>
            </Container>
        </div> 
    );
};

export default Banner;