import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import SummarySection from "components/Section/SummarySection.js";
import TransactionList from "components/Section/TransactionList.js";

import BuySell from "components/BuySell/BuySell.js";



import CoundownTimer from "components/CoundownTimer.js";
import FaqComponents from "components/Faq.js";



import DefaultFooter from "components/Footers/DefaultFooter.js";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";


function HomePage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us pt-0">
          <Container>
            <BuySell/>

          <h2 className="title text-center" >About Us</h2>
            <Row>
              <Col className="" md="6">
                <p className="font-weight-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio labore, nemo incidunt nulla dolorum eaque atque vel, error quibusdam voluptas delectus ullam eius pariatur explicabo iure? Nihil earum repellat illo.</p>
                  <p className="font-weight-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio labore, nemo incidunt nulla dolorum eaque atque vel, error quibusdam voluptas delectus ullam eius pariatur explicabo iure? Nihil earum repellat illo.</p>
                  <p className="font-weight-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio labore, nemo incidunt nulla dolorum eaque atque vel, error quibusdam voluptas delectus ullam eius pariatur explicabo iure? Nihil earum repellat illo.</p>
              </Col>
              <Col md="6">
              <img src={require("assets/img/tok-aboutimg.png")} height="60px" class="img-fluid" alt="the tok app" />
              </Col>
            </Row>
            </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Lorem ipsum dolor sit amet</h2>
            <div className="team">
              <Row>
                <Col md="4" className="mt-5">
                    <Card className="purple-gradient rounded-card">
                        <CardBody>
                            <h5  className="m-0 text-uppercase font-weight-bold">Total Provided</h5>
                            <h3 className="mb-0">0 ETH</h3>
                            <small className="font-weight-bold text-uppercase">Goal 700eth</small>
                        </CardBody>
                    </Card>
                </Col>
                
                <Col md="4">
                    <Card className="purple-gradient rounded-card">
                        <CardBody>
                            <h5 className="m-0 text-uppercase font-weight-bold">IBCO End In</h5>
                            <CoundownTimer></CoundownTimer>
                        </CardBody>
                    </Card>
                </Col>
                
                <Col md="4" className="mt-5 ">
                    <Card className="purple-gradient rounded-card">
                        <CardBody>
                            <h5 className="m-0 text-uppercase font-weight-bold">You Share</h5>
                            <h3 className="mb-0">0 H</h3>
                            <small className="font-weight-bold text-uppercase">0 ETH (0%)</small>
                        </CardBody>
                    </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <SummarySection/>
        <TransactionList/>
        <FaqComponents/>
        <DefaultFooter />
      </div>
    </>
  );
}

export default HomePage;
