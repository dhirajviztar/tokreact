import React from "react";

// reactstrap components
import {
  Card,
  Container,
  CardHeader,
  CardBody,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";

function FaqComponents() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  // collapse states and functions
  const [collapses, setCollapses] = React.useState([]);
  const changeCollapse = (collapse) => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter((prop) => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };
  return (
    <>
      <div className="section section-tabs bg-white">
        <Container>
          <h2 className="title text-center text-uppercase p-0">
            Frequently Asked Questions
          </h2>
          <Row>
            <Col className="ml-auto mr-auto" md="3" xl="3">
              <Nav
                className="card flex-column justify-content-center p-0 faqtabs rounded-card overflow-hidden"
                role="tablist"
                tabs
              >
                <NavItem>
                  <NavLink
                    className={iconPills === "1" ? "active rounded-0" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setIconPills("1");
                    }}
                  >
                    The Token
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={iconPills === "2" ? "active rounded-0" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setIconPills("2");
                    }}
                  >
                    BUYING / TRADING
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={iconPills === "3" ? "active rounded-0" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setIconPills("3");
                    }}
                  >
                    OPTIONS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={iconPills === "4" ? "active rounded-0" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setIconPills("4");
                    }}
                  >
                    LIQUIDITY PROVIDER (LP)
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={iconPills === "5" ? "active rounded-0" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setIconPills("5");
                    }}
                  >
                    STAKING LOTS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={iconPills === "6" ? "active rounded-0" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setIconPills("6");
                    }}
                  >
                    REWARDS AND rHEGIC
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col className="ml-auto mr-auto" md="9" xl="9">
              <TabContent
                className="text-left"
                activeTab={"iconPills" + iconPills}
              >
                <TabPane tabId="iconPills1">
                  <div id="acordeon">
                    <div
                      aria-multiselectable={true}
                      id="accordion"
                      role="tablist"
                    >
                      <div className="no-transition">
                        <CardHeader
                          className="card-collapse"
                          id="headingOne"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-expanded={collapses.includes(1)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseOne"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(1);
                              }}
                            >
                              Default Collapsible Item 1{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(1)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                        <CardHeader
                          className="card-collapse"
                          id="headingTwo"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-controls="collapseTwo"
                              aria-expanded={collapses.includes(2)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseTwo"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(2);
                              }}
                            >
                              Default Collapsible Item 2{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(2)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                        <CardHeader
                          className="card-collapse"
                          id="headingThree"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-controls="collapseThree"
                              aria-expanded={collapses.includes(3)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseThree"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(3);
                              }}
                            >
                              Default Collapsible Item 3{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(3)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="iconPills2">
                  <div id="acordeon2">
                    <div
                      aria-multiselectable={true}
                      id="acordeon2"
                      role="tablist"
                    >
                      <div className="no-transition">
                        <CardHeader
                          className="card-collapse"
                          id="headingOne"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-expanded={collapses.includes(1)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseOne"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(1);
                              }}
                            >
                              Default Collapsible Itesdfsdfsdfsm 1{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(1)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                        <CardHeader
                          className="card-collapse"
                          id="headingTwo"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-controls="collapseTwo"
                              aria-expanded={collapses.includes(2)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseTwo"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(2);
                              }}
                            >
                              Default Collapsible Item 2{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(2)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                        <CardHeader
                          className="card-collapse"
                          id="headingThree"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-controls="collapseThree"
                              aria-expanded={collapses.includes(3)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseThree"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(3);
                              }}
                            >
                              Default Collapsible Item 3{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(3)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="iconPills3">
                  <div id="acordeon3">
                    <div
                      aria-multiselectable={true}
                      id="acordeon3"
                      role="tablist"
                    >
                      <div className="no-transition">
                        <CardHeader
                          className="card-collapse"
                          id="headingOne"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-expanded={collapses.includes(1)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseOne"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(1);
                              }}
                            >
                              Default Collapsible Itesdfsdfsdfsm 1{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(1)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                        <CardHeader
                          className="card-collapse"
                          id="headingTwo"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-controls="collapseTwo"
                              aria-expanded={collapses.includes(2)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseTwo"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(2);
                              }}
                            >
                              Default Collapsible Item 2{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(2)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                        <CardHeader
                          className="card-collapse"
                          id="headingThree"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-controls="collapseThree"
                              aria-expanded={collapses.includes(3)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseThree"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(3);
                              }}
                            >
                              Default Collapsible Item 3{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(3)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="iconPills4">
                  <div id="acordeon4">
                    <div
                      aria-multiselectable={true}
                      id="acordeon4"
                      role="tablist"
                    >
                      <div className="no-transition">
                        <CardHeader
                          className="card-collapse"
                          id="headingOne"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-expanded={collapses.includes(1)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseOne"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(1);
                              }}
                            >
                              Default Collapsible Itesdfsdfsdfsm 1{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(1)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                        <CardHeader
                          className="card-collapse"
                          id="headingTwo"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-controls="collapseTwo"
                              aria-expanded={collapses.includes(2)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseTwo"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(2);
                              }}
                            >
                              Default Collapsible Item 2{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(2)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                        <CardHeader
                          className="card-collapse"
                          id="headingThree"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-controls="collapseThree"
                              aria-expanded={collapses.includes(3)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseThree"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(3);
                              }}
                            >
                              Default Collapsible Item 3{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(3)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="iconPills5">
                  <div id="acordeon5">
                    <div
                      aria-multiselectable={true}
                      id="acordeon5"
                      role="tablist"
                    >
                      <div className="no-transition">
                        <CardHeader
                          className="card-collapse"
                          id="headingOne"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-expanded={collapses.includes(1)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseOne"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(1);
                              }}
                            >
                              Default Collapsible Itesdfsdfsdfsm 1{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(1)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                        <CardHeader
                          className="card-collapse"
                          id="headingTwo"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-controls="collapseTwo"
                              aria-expanded={collapses.includes(2)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseTwo"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(2);
                              }}
                            >
                              Default Collapsible Item 2{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(2)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                        <CardHeader
                          className="card-collapse"
                          id="headingThree"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-controls="collapseThree"
                              aria-expanded={collapses.includes(3)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseThree"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(3);
                              }}
                            >
                              Default Collapsible Item 3{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(3)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="iconPills6">
                  <div id="acordeon6">
                    <div
                      aria-multiselectable={true}
                      id="acordeon6"
                      role="tablist"
                    >
                      <div className="no-transition">
                        <CardHeader
                          className="card-collapse"
                          id="headingOne"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-expanded={collapses.includes(1)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseOne"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(1);
                              }}
                            >
                              Default Collapsible Itesdfsdfsdfsm 1{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(1)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                        <CardHeader
                          className="card-collapse"
                          id="headingTwo"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-controls="collapseTwo"
                              aria-expanded={collapses.includes(2)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseTwo"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(2);
                              }}
                            >
                              Default Collapsible Item 2{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(2)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                        <CardHeader
                          className="card-collapse"
                          id="headingThree"
                          role="tab"
                        >
                          <h5 className="mb-0 panel-title">
                            <a
                              aria-controls="collapseThree"
                              aria-expanded={collapses.includes(3)}
                              className="collapsed"
                              data-parent="#accordion"
                              href="#pablo"
                              id="collapseThree"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(3);
                              }}
                            >
                              Default Collapsible Item 3{" "}
                              <i className="nc-icon nc-minimal-down" />
                            </a>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(3)}>
                          <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </CardBody>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FaqComponents;
