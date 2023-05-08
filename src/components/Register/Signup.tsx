import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./signup.css";
import axios from "axios";
import Navheader from "../Navbar/Nav";
import Footer from "../footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
const Signup = () => {
  const [password, setpassword] = React.useState({
    pass: "password",
    cpass: "password",
  });

  const [info, setData]: any = useState({
    email: "",
    pass: "",
    firstname: "",
    lastname: "",
    mobile: "",
    cpass: "",
  });
  const [check, setCheck]: any = useState({
    email: <></>,
    cpass: <></>,
    pass: <></>,
    firstname: <></>,
    lastname: <></>,
    mobile: <></>,
  });
  const handleSignup = (e: any) => {
    const newdata: any = { ...info };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    if (e.target.id === "pass") {
      if (e.currentTarget.value.length === 8 && e.currentTarget.value !== "") {
        setCheck({
          ...check,
          [e.target.id]: (
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-success"
            ></FontAwesomeIcon>
          ),
        });
      } else if (e.currentTarget.value === "") {
        setCheck({
          ...check,
          [e.target.id]: <></>,
        });
      } else {
        setCheck({
          ...check,
          [e.target.id]: (
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-danger"
            ></FontAwesomeIcon>
          ),
        });
      }
    }
    
    if (e.target.id === "email") {
      if (
        e.currentTarget.value !== "" &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          e.currentTarget.value
        ) &&
        e.currentTarget.value !== ""
      ) {
        setCheck({
          ...check,
          email: (
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-danger"
            ></FontAwesomeIcon>
          ),
        });
      } else if (e.currentTarget.value === "") {
        setCheck({
          ...check,
          email: <></>,
        });
      } else {
        setCheck({
          ...check,
          email: (
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-success"
            ></FontAwesomeIcon>
          ),
        });
      }
    }
    if (e.target.id === "firstname" || e.target.id === "lastname") {
      if (
        !/[0-9]/.test(e.currentTarget.value) &&
        e.currentTarget.value !== "" &&
        e.currentTarget.value.length <= 20
      ) {
        setCheck({
          ...check,
          [e.currentTarget.id]: (
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-success"
            ></FontAwesomeIcon>
          ),
        });
      } else if (e.currentTarget.value === "") {
        setCheck({
          ...check,
          [e.currentTarget.id]: <></>,
        });
      } else {
        setCheck({
          ...check,
          [e.currentTarget.id]: (
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-danger"
            ></FontAwesomeIcon>
          ),
        });
      }
    }
    if (e.target.id === "mobile") {
      if (
        /[0-9]/.test(e.currentTarget.value) &&
        e.currentTarget.value !== "" &&
        e.currentTarget.value.length === 10
      ) {
        setCheck({
          ...check,
          [e.currentTarget.id]: (
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-success"
            ></FontAwesomeIcon>
          ),
        });
      } else if (e.currentTarget.value === "") {
        setCheck({
          ...check,
          [e.currentTarget.id]: <></>,
        });
      } else {
        setCheck({
          ...check,
          [e.currentTarget.id]: (
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-danger"
            ></FontAwesomeIcon>
          ),
        });
      }
    }
  };
React.useEffect(()=>{
    if (
      info.cpass.length === 8 &&
      info.cpass !== "" &&
      info.cpass === info.pass
    ) {
      setCheck({
        ...check,
        cpass: (
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-success"
          ></FontAwesomeIcon>
        ),
      });
    } else if (info.cpass === "") {
      setCheck({
        ...check,
        cpass: <></>,
      });
    } else {
      setCheck({
        ...check,
        cpass: (
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="text-danger"
          ></FontAwesomeIcon>
        ),
      });
    }
  
},[check, info.cpass, info.pass])
  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      window.open("/");
    } catch (error: any) {
      alert(error.response.data);
    }
  };

  function showpassword(e: any) {
    if (e.currentTarget.id === "inpassword") {
      password.pass === "password"
        ? setpassword({ ...password, pass: "text" })
        : setpassword({ ...password, pass: "password" });
    }
    if (e.currentTarget.id === "cpassword") {
      password.cpass === "password"
        ? setpassword({ ...password, cpass: "text" })
        : setpassword({ ...password, cpass: "password" });
    }
  }

  return (
    <div>
      <div className="bg-img">
        <div className="card-overlay">
          <Navheader />
          <Container>
            <div className="row rows mt-5">
              <h1
                id="head"
                className="text-light"
                style={{ textAlign: "center" }}
              >
                Delivering Food and Happiness
              </h1>
            </div>
            <div className="row mt-5 rows">
              <div className="col-md-4 col-10" style={{ width: "100%" }}>
                <Form
                  className="mb-2 pt-3 gap20 column"
                  style={{ width: "auto" }}
                  autoComplete="off"
                  onSubmit={(e) => handlesubmit(e)}
                >
                  <div
                    className="rows mt-3"
                    style={{ justifyContent: "space-around", gap: "20px" }}
                  >
                    <Form.Group className="mb-2">
                      <Form.Label className="text-light font1 important">
                        *Email address <span>{check.email}</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your Email"
                        id="email"
                        value={info.email}
                        onChange={(e) => handleSignup(e)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label className="text-light font1 important">
                        *Mobile Number <span>{check.mobile}</span>
                      </Form.Label>
                      <Form.Control
                        type="phone"
                        placeholder="Enter your Mobile number"
                        id="mobile"
                        value={info.mobile}
                        onChange={(e) => handleSignup(e)}
                      />
                    </Form.Group>
                  </div>

                  <div
                    className="rows mt-3"
                    style={{ justifyContent: "space-evenly", gap: "20px" }}
                  >
                    <Form.Group className="mb-2">
                      <Form.Label className="text-light font1 important">
                        *Firstname <span>{check.firstname}</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Firstname"
                        id="firstname"
                        value={info.firstname}
                        onChange={(e) => handleSignup(e)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-2">
                      <Form.Label className="text-light font1 important">
                        *Lastname <span>{check.lastname}</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Lastname"
                        id="lastname"
                        value={info.lastname}
                        onChange={(e) => handleSignup(e)}
                      />
                    </Form.Group>
                  </div>

                  <div
                    className="rows mt-3"
                    style={{ justifyContent: "space-evenly", gap: "20px" }}
                  >
                    <Form.Group className="mb-2">
                      <Form.Label className="text-light font1 important">
                        *Password <span>{check.pass}</span>
                      </Form.Label>
                      <div className="rows">
                        <Form.Control
                          type={password.pass}
                          placeholder="Password must be eight characters"
                          id="pass"
                          value={info.pass}
                          onChange={(e) => handleSignup(e)}
                        />
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-muted"
                          style={{ marginRight: "-200px", cursor: "pointer" ,position:"absolute"}}
                          onClick={(e) => showpassword(e)}
                          id="inpassword"
                        ></FontAwesomeIcon>
                      </div>

                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2">
                      <Form.Label className="text-light font1 important">
                        *Confirm Password <span>{check.cpass}</span>
                      </Form.Label>
                      <div className="rows">
                        <Form.Control
                          type={password.cpass}
                          placeholder="Confirm your Password"
                          id="cpass"
                          value={info.cpass}
                          onChange={(e) => handleSignup(e)}
                        />
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-muted"
                          style={{  marginRight: "-200px", cursor: "pointer" ,position:"absolute" }}
                          id="cpassword"
                          onClick={(e) => showpassword(e)}
                        ></FontAwesomeIcon>
                      </div>
                    </Form.Group>
                  </div>
                  <Form.Text className="text-danger mt-1 font3 fl">
                    {}
                  </Form.Text>

                  <div
                    className="col-md-4 col-12 mt-2"
                    style={{ justifyContent: "space-evenly", gap: "20px" }}
                  >
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ width: "100%" }}
                      className="Submit"
                    >
                      Create an Account
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Signup;
