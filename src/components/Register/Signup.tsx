import React, { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./signup.css";

export default class Signup extends Component {
  render() {
    return (
      <div className="bg-img">
        <div className="card-overlay">
          <Container>
            <div className="row">
              <div className="col-12 col-md-4">
                <div>
                  <Form method="POST" className="mb-4 pt-3"style={{ width: "auto" }}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Label className="text-light">Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter your Email" />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicFirstname">
                      <Form.Label className="text-light">Firstname</Form.Label>
                      <Form.Control type="text" placeholder="Enter your Firstname" />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicLastname">
                      <Form.Label className="text-light">Lastname</Form.Label>
                      <Form.Control type="text" placeholder="Enter your Lastname" />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicMobile">
                      <Form.Label className="text-light">Mobile Number</Form.Label>
                      <Form.Control type="phone" placeholder="Enter your Mobile number" />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="Password">
                      <Form.Label className="text-light">Password</Form.Label>
                      <Form.Control type="password" placeholder="Enter your Password" />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="ConfirmPassword">
                      <Form.Label className="text-light">Confirm Password</Form.Label>
                      <Form.Control type="password"placeholder="Confirm your Password"/>
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ width: "100%" }}className="Submit mb-5">Submit
                    </Button>
                  </Form>
                </div>
              </div>
              <div className="col-12 col-md-6 side-content">
                <h1 className="text-light" id="head">
                  Delivering Food and Happiness!
                </h1>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
