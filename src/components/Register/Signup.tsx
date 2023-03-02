import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./signup.css";
import axios from "axios";
const Signup = () => {
 const [info, setData]: any = useState({
    email: "",
    pass: "",
    firstname: "",
    lastname: "",
    mobile: "",
    cpass: "",
  });
  const handleSignup = (e: any) => {
    const newdata: any = { ...info };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  const handlesubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var data = {
      Email: info.email,
      password: info.pass,
      Firstname: info.firstname,
      Lastname: info.lastname,
      phoneno: info.mobile,
    };

    var config = {
      method: "post",
      url: "http://localhost:9000/signin",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      const response = await axios(config);
      alert(response.data);
      window.open('/')
    } catch (error:any) {
      alert(error.response.data);
    }
  };

  return (
    <div className="bg-img">
      <div className="card-overlay">
        <Container>
          <div className="row">
            <div className="col-12 col-md-4">
              <div>
                <Form
                  className="mb-4 pt-3"
                  style={{ width: "auto" }}
                  autoComplete="off"
                  onSubmit={(e) => handlesubmit(e)}
                >
                  <Form.Group className="mb-4">
                    <Form.Label className="text-light">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your Email"
                      id="email"
                      value={info.email}
                      onChange={(e) => handleSignup(e)}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="text-light">Firstname</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Firstname"
                      id="firstname"
                      value={info.firstname}
                      onChange={(e) => handleSignup(e)}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="text-light">Lastname</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Lastname"
                      id="lastname"
                      value={info.lastname}
                      onChange={(e) => handleSignup(e)}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="text-light">
                      Mobile Number
                    </Form.Label>
                    <Form.Control
                      type="phone"
                      placeholder="Enter your Mobile number"
                      id="mobile"
                      value={info.mobile}
                      onChange={(e) => handleSignup(e)}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="text-light">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your Password"
                      id="pass"
                      value={info.pass}
                      onChange={(e) => handleSignup(e)}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-5">
                    <Form.Label className="text-light">
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm your Password"
                      id="cpass"
                      value={info.cpass}
                      onChange={(e) => handleSignup(e)}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    style={{ width: "100%" }}
                    className="Submit mb-5"
                  >
                    Submit
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
};
export default Signup;