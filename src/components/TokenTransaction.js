import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  Button,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input

} from "reactstrap";



function TokenTransaction() {
  
  return (
    <>
          <Card className="rounded-card m-0 floating-section text-left">
            <CardBody>
                <Row>
                    <Col md="4">
                        <p class="m-0 small font-weight-bold">Amount to Contribute:</p>
                        <InputGroup >
                         <Input value="0" type="text"  className="rounded-0"></Input>
                            <InputGroupAddon addonType="append">
                                <InputGroupText className="rounded-0">
                                ETH
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                    
                    <Col md="4">
                        <p class="m-0 small font-weight-bold">ChangeDuring IBCO:</p>
                        <InputGroup >
                         <Input value="0" type="text"  className="rounded-0"></Input>
                            <InputGroupAddon addonType="append" >
                                <InputGroupText className="rounded-0">
                                ETH
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                    
                    <Col md="3">
                    <p class="m-0 small font-weight-bold">&nbsp;</p>
                    <Button
                        color="warning"
                        href="#pablo"
                        id="upgrade-to-pro"
                        size="lg"
                        className="m-0"
                        onClick={(e) => e.preventDefault()}
                        >Connect Wallet
                    </Button>
                    </Col>
                </Row>
            </CardBody>
          </Card>
     
    </>
  );
}

export default TokenTransaction;
