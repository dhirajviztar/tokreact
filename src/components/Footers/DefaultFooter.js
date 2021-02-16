/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container,
    Row,
    Col, } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default bg-dark text-white py-3">
        <Container>
            <Row>
                <Col md="6" className="text-center text-md-left">
                    
                    Copytight © 2020 - {new Date().getFullYear()},TOK
        
                </Col>
                
                <Col md="6" className="text-center text-md-right d-flex justify-content-md-end">
                <nav >
                    <ul>
                    <li>
                        <a
                        href="https://www.thetokapp.com/doc/TOK_Terms%20%20Conditions.pdf"
                        target="_blank"
                        >
                        Terms
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://www.thetokapp.com/doc/TOK_Privacy.pdf"
                        target="_blank"
                        >
                        Privacy
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://www.thetokapp.com/"
                        target="_blank"
                        >
                        Contact
                        </a>
                    </li>
                    </ul>
                </nav>
          
                </Col>
            </Row>
          </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
