import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Button,  
  Input,
  Row,
  Col,
} from "reactstrap";


function TokenTransaction() {
  const [iconPills, setIconPills] = React.useState("1"); 
  let ButtonText;
  if(iconPills === "1"){
    ButtonText = <Button  color="warning" href="#pablo"  size="lg" className="m-0" 
    onClick={(e) => e.preventDefault()}
    >Buy Tok
</Button>
  }else{
    ButtonText = <Button  color="warning" href="#pablo"  size="lg" className="m-0" 
    onClick={(e) => e.preventDefault()}
    >Sell Tok
</Button>
  }
  return (
    <>
      <Card className="rounded-card buy-sell-block text-left px-3 py-2">
        <CardHeader className="d-flex justify-content-between mb-4">
          <Nav className="justify-content-start p-0" role="tablist" tabs>
            <NavItem>
              <NavLink
                className={iconPills === "1" ? "active rounded-0" : ""}
                href="#buy"
                onClick={(e) => {
                  e.preventDefault();
                  setIconPills("1");
                }}
              >
                Buy
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={iconPills === "2" ? "active rounded-0" : ""}
                href="#sell"
                onClick={(e) => {
                  e.preventDefault();
                  setIconPills("2");
                }}
              >
                Sell
              </NavLink>
            </NavItem>
          </Nav>
          {ButtonText}
        </CardHeader>
        <CardBody>
          <TabContent
            className="text-left text-dark"
            activeTab={"iconPills" + iconPills}
          >
            <TabPane tabId="iconPills1">
              <Row>
                <Col md="6" className="d-flex">
                  <Row>
                    <Col md="3">
                      <img src={require("assets/img/eth-icon.png")} />
                    </Col>
                    <Col md="3">
                      <p className="m-0 font-weight-bold d-flex flex-column">
                        ETH
                        <small className="font-weight-bold">Balance</small>
                        <small className="font-weight-bold">0</small>
                      </p>
                    </Col>
                    <Col md="6">
                      <Input className="rounded-0 h2"  value="0.00" type="number" />
                    </Col>
                  </Row>
                </Col>

                <Col md="6">
                  <Row>
                    <Col md="3">
                      <img src={require("assets/img/tok-logo-white.png")} />
                    </Col>
                    <Col md="3">
                      <p className="m-0 font-weight-bold d-flex flex-column">
                        xTOK
                        <small className="font-weight-bold">Balance</small>
                        <small className="font-weight-bold">0</small>
                      </p>
                    </Col>
                    <Col md="6">
                      <Input className="rounded-0 h2" value="0.00" type="number" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="iconPills2">
              <Row>
                <Col md="6" className="d-flex">
                  <Row>
                    <Col md="3">
                      <img src={require("assets/img/eth-icon.png")} />
                    </Col>
                    <Col md="3">
                      <p className="m-0 font-weight-bold d-flex flex-column">
                        ETH
                        <small className="font-weight-bold">Balance</small>
                        <small className="font-weight-bold">0</small>
                      </p>
                    </Col>
                    <Col md="6">
                      <Input className="rounded-0 h2"  value="0.00"  type="number" />
                    </Col>
                  </Row>
                </Col>

                <Col md="6">
                  <Row>
                    <Col md="3">
                      <img src={require("assets/img/tok-logo-white.png")} />
                    </Col>
                    <Col md="3">
                      <p className="m-0 font-weight-bold d-flex flex-column">
                        xTOK
                        <small className="font-weight-bold">Balance</small>
                        <small className="font-weight-bold">0</small>
                      </p>
                    </Col>
                    <Col md="6">
                      <Input className="rounded-0 h2"  value="0.00"  type="number" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </>
  );
}

export default TokenTransaction;
