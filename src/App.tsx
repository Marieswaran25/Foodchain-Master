import {Component} from 'react';
import Signup from './components/Register/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';


class App extends Component {
  
    render() {
      return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>)
    }
  }

export default App;
