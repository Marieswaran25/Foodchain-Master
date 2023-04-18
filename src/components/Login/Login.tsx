import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import axios from "axios";
import Navheader from "../Navbar/Nav";
const Login = () => {
  const [logininfo, setData]: any = useState({
    Email: "",
    password: "",
  });
  const handle = (e: any) => {
    setData({...logininfo,[e.target.id]:e.target.value})
};

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var data = {
      Email: logininfo.Email,
      password: logininfo.password
    };

    var config = {
      method: "post",
      url: "http://localhost:9000/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
      
    };
    try {
      const response = await axios(config);
      sessionStorage.setItem('accesstoken',response.data.accesstoken)
    } catch (error:any) {
      alert(error.response.data);
    }
  };

  return (

    <div className="bg-img">
      <div className="card-overlay">
      <Navheader />
        <Container>
          <div className="row" style={{"marginTop":"15%"}}>
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
                      id="Email"
                      value={logininfo.Email}
                      onChange={(e) => handle(e)}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="text-light">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your Password"
                      id="password"
                      value={logininfo.password}
                      onChange={(e) => handle(e)}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-4 alink">
                    <a href="/signup">Create a New Account!!</a>
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    style={{ width: "100%" }}
                    className="Submit mb-5"
                  >
                    Login
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
export default Login;