import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navheader from './components/Navbar/Nav'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navheader />
    <App />
  </React.StrictMode>
);

