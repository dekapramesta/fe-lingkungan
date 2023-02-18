import React from "react";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar className="d-flex p-2" variant="dark" expand="lg" collapseOnSelect style={{ background: "#467382" }}>
        <Container fluid>
          <Row className="d-flex justify-content-center w-100">
            <Col>
              <div>
                <Navbar.Brand className="fs-6" href="#">
                  PUPUK SRIWIDJAYA
                </Navbar.Brand>
              </div>
              <div>
                <Navbar.Brand className="fs-6" href="#">
                  PALEMBANG
                </Navbar.Brand>
              </div>
            </Col>

            <Col className="d-flex align-items-center">
              <Row className="w-100">
                <Col>
                  <span className="text-white">POWERED BY : MUSA</span>
                </Col>
                <Col>
                  <span className="ms-3" style={{ border: " 1px solid white", height: "100%" }}></span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
