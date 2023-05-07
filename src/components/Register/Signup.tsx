import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./signup.css";
import axios from "axios";
import Navheader from "../Navbar/Nav";
import Footer from "../footer/footer";
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
   <div>
     <div className="bg-img">
      <div className="card-overlay">
        <Navheader />
        <Container>
        <div className="row rows">
              <h1 id="head" className="text-light" style={{textAlign:"center"}}>Delivering Food and Happiness</h1>
            </div>
         <div className="row mt-5 rows">
          <div className="col-md-4 col-10" style={{"width":"100%"}}>
          <Form
                  className="mb-2 pt-3 gap20 column"
                  style={{ width: "auto" }}
                  autoComplete="off"
                  onSubmit={(e) => handlesubmit(e)}
                >
             <div className="rows mt-3" style={{"justifyContent":"space-around","gap":"20px"}}>
             <Form.Group className="mb-2">
                    <Form.Label className="text-light font1 important">
                      *Email address
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
                      *Mobile Number
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

                 <div className="rows mt-3" style={{"justifyContent":"space-evenly","gap":"20px"}}>
                 <Form.Group className="mb-2">
                    <Form.Label className="text-light font1 important">*Firstname</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Firstname"
                      id="firstname"
                      value={info.firstname}
                      onChange={(e) => handleSignup(e)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label className="text-light font1 important">*Lastname</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Lastname"
                      id="lastname"
                      value={info.lastname}
                      onChange={(e) => handleSignup(e)}
                    />
                  </Form.Group>
                 </div>

                 

<div className="rows mt-3" style={{"justifyContent":"space-evenly","gap":"20px"}}>
<Form.Group className="mb-2">
                    <Form.Label className="text-light font1 important">*Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your Password"
                      id="pass"
                      value={info.pass}
                      onChange={(e) => handleSignup(e)}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label className="text-light font1 important">
                      *Confirm Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm your Password"
                      id="cpass"
                      value={info.cpass}
                      onChange={(e) => handleSignup(e)}
                    />
                  </Form.Group>
</div>
<Form.Text className="text-danger mt-1 font3 fl">{}</Form.Text>

<div className="col-md-4 col-12 mt-2" style={{"justifyContent":"space-evenly","gap":"20px"}}>
<Button
                    variant="primary"
                    type="submit"
                    style={{ "width": "100%"}}
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
    <Footer/>
   </div>
  );
};
export default Signup;