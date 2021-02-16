import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
        
    }
  });
  return (
    <>
      <div className="page-header ">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/tok-banner.png") + ")",
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundColor:'rgb(225, 225, 225)'
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title text-uppercase m-0">Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="text-center">
                <Button
                  color="warning"
                  href="#pablo"
                  id="upgrade-to-pro"
                  size="lg"
                  onClick={(e) => e.preventDefault()}
                >Connect Wallet
                </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
