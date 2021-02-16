import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  Container,
} from "reactstrap";

// core components
import TokenTransaction from "../TokenTransaction.js";


function TransactionList() {
  const [iconPills, setIconPills] = React.useState("1");
  const fields = [];
  const [pills, setPills] = React.useState("1");
  for (let i = 1; i <= 7; i++) {
    fields.push(
      <tr className="font-weight-bold">
        <td>{i}</td>
        <td>{i * 5} ETH</td>
        <td>adasdasduakdgasjgd</td>
        <td>adasdasduakdgasjsd</td>
      </tr>
    );
  }
  return (
    <>
    
   
      <div className="section section-tabs pt-0">
      
        <Container>
        <TokenTransaction/>
          <h2 className="title text-center text-uppercase">
            IBCO transaction List
          </h2>
          <div class="card rounded-card overflow-hidden">
            <table class="table mb-0">
              <thead class="primary-bg text-white">
                <tr>
                  <td>#</td>
                  <td>Amount </td>
                  <td>Address</td>
                  <td>Transaction</td>
                </tr>
              </thead>
              <tbody>{fields}</tbody>
            </table>
          </div>

          <Card className="rounded-card">
            <CardBody>
              <div className="row justify-content-center align-items-center">
                <div className="col-2 text-center">
                  <h3 className="m-0 display-1">
                    <i className="now-ui-icons travel_info"></i>
                  </h3>
                </div>
                <div className="col-9 text-left">
                  <p className="font-weight-bold m-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laudantium tempora optio repellendus libero beatae culpa
                    suscipit tempore rerum iusto eligendi. Molestiae fugit
                    repudiandae mollitia quis quae nobis? Quasi, voluptate
                    labore.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default TransactionList;
