import React, {useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import axios from "axios";
import Navheader from "../Navbar/Nav";
import Footer from "../footer/footer";
import { faCircleCheck, faCircleXmark, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [password,setpassword]= React.useState('password');


  const [logininfo, setData]: any = useState({
    Email: "",
    password: "",
  });
  const [check, setCheck]: any = useState({
    Email: <></>,
    password: <></>,
  })
  const handle = (e: any) => {
    setData({ ...logininfo, [e.target.id]: e.target.value });
    if(e.target.id==='password'){
      if(e.currentTarget.value.length===8){
        setCheck({...check,
          password:<FontAwesomeIcon icon={faCircleCheck} className="text-success"></FontAwesomeIcon>})
      }
      else if(e.currentTarget.value===''){
        setCheck({
              ...check,
              Email:<></>,
              password:<></>
            })
      }
      else{
        setCheck({...check,
          password:<FontAwesomeIcon icon={faCircleXmark} className="text-danger"></FontAwesomeIcon>})
      }
    }
    if(e.target.id==='Email'){
      if((e.currentTarget.value!==''&& !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.currentTarget.value))){
            setCheck({
              ...check,
              Email:<FontAwesomeIcon icon={faCircleXmark} className="text-danger"></FontAwesomeIcon>,
            })
           
         }
         else if(e.currentTarget.value===''){
          setCheck({
            ...check,
            Email:<></>,
          })
          
        }
        else{
          setCheck({
            ...check,
            Email:<FontAwesomeIcon icon={faCircleCheck} className="text-success"></FontAwesomeIcon>,
          })
        }}
  };

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var data = {
      Email: logininfo.Email,
      password: logininfo.password,
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
      sessionStorage.setItem("accesstoken", response.data.accesstoken);
    } catch (error: any) {
      alert(error.response.data);
    }
  };
  function showpassword(){
    password==='password'?setpassword('text'):setpassword('password')
  }

  return (
    <div>
      <div className="bg-img">
        <div className="card-overlay">
          <Navheader />
          <Container>
            <div className="row rows mt-5">
              <h1 id="head" className="text-light" style={{textAlign:"center"}}>Delivering Food and Happiness</h1>
            </div>

            <div className="row rows mt-5">
              <div className="col-md-4 col-12"></div>
              <div className="col-md-4 col-10">
                <Form
                  className="mb-4 pt-3"
                  style={{ width: "auto" }}
                  autoComplete="off"
                  onSubmit={(e) => handlesubmit(e)}
                >
                  <Form.Group className="mb-4">
                    <Form.Label className="text-light important">
                      *Email address <span>{check.Email}</span>
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
                    <Form.Label className="text-light important">*Password <span>{check.password}</span></Form.Label>
                    <div className="rows">
                    <Form.Control
                      type={password}
                      placeholder="Enter your Password"
                      id="password"
                      value={logininfo.password}

                      onChange={(e) => handle(e)}
                    />
                    <FontAwesomeIcon icon={faEye} className="text-light" style={{marginLeft:"-30px", cursor: "pointer"}} onClick={e=>showpassword()}></FontAwesomeIcon>
                    </div>
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
<center>
<Form.Text className="text-danger mt-2 font3 fl">{}</Form.Text>

</center>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ width: "100%" }}
                    className="Submit mb-5 mt-3"
                  >
                    Login
                  </Button>
                  <div style={{ display:"flex",alignItems:"center",justifyContent: "space-between" }}>
                    <div className="rows gap5">
                      <p className="text-light font1">No Account?</p>
                      <p><a href="/signup" className="font3">Register Now</a></p>
                    </div>
                   
                  <div>
                   <p><a href="/" className="font3">Forget Password?</a></p></div>
                  </div>
                </Form>
              </div>
              <div className="col-md-4 col-12"></div>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
