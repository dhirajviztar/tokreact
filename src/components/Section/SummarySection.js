import React from "react";

// reactstrap components
import {
    
    Container,
    Row,
    Col,
  } from "reactstrap";
// core components
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";

function SummarySection() {

  React.useEffect(() => {
    if (window.innerWidth > 991) {
    }
  });
  return (
    <>
      <div className="section "
      style={{
        backgroundImage: "url(" + require("assets/img/tok-bg.png") + ")",
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundColor:'rgb(225, 225, 225)',
        backgroundAttachment:'fixed'
      }}
      >
        <div className="content-center text-white text-center" 
        >
          <Container>
            <h2 className="title text-white text-center" >Summary</h2>
            
            <Row>
                <Col md="4" >
                    <Card className="frosted-bg rounded-card">
                        <CardBody>
                            <h5  className="m-0 text-uppercase font-weight-bold">ETH CONTRIBUTED</h5>
                            <h3 className="mb-0">0 ETH</h3>
                        </CardBody>
                    </Card>
                </Col>

                <Col md="4" >
                    <Card className="frosted-bg rounded-card">
                        <CardBody>
                            <h5  className="m-0 text-uppercase font-weight-bold">IBCO CONTRIBUTED</h5>
                            <h3 className="mb-0">0 ETH</h3>
                        </CardBody>
                    </Card>
                </Col>

                <Col md="4" className="">
                    <Card className="frosted-bg rounded-card">
                        <CardBody>
                            <h5  className="m-0 text-uppercase font-weight-bold">TOKEN WILL BE CLAIMABLE AT SETTLEMENT</h5>
                            <h3 className="mb-0">0 ETH</h3>
                        </CardBody>
                    </Card>
                </Col>

                <Col md="4" >
                    <Card className="frosted-bg rounded-card">
                        <CardBody>
                            <h5  className="m-0 text-uppercase font-weight-bold">IBCO START PRICE</h5>
                            <h3 className="mb-0">0 ETH</h3>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" >
                    <Card className="frosted-bg rounded-card">
                        <CardBody>
                            <h5  className="m-0 text-uppercase font-weight-bold">CURRENT PRICE</h5>
                            <h3 className="mb-0">0 ETH</h3>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" >
                    <Card className="frosted-bg rounded-card">
                        <CardBody>
                            <h5  className="m-0 text-uppercase font-weight-bold">PRICE CHANGE DURING IBCO</h5>
                            <h3 className="mb-0">0 ETH</h3>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SummarySection;
