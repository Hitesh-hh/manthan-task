
import React from 'react';
import {BrowserRouter as Router,Routes , Route, Navigate } from "react-router-dom"; 
import './App.css';
import Navbar from './components/navbar';
import signin from "./assets/Signin.png"
import trade from "./assets/Trading-screen.png"

function Home() {
  return(
    <div>
      <div className="img-container">
            <div className="signin">
              <img src= {signin} />
              <div className="bs">
                <button className='b1'>Trade Crypto</button>
                <button className='b1'>Sign In</button>
              </div>
              </div>

      <div className="trade">
        <img src={trade}/>
     </div>

     </div>
     </div>

  ) 
};

// Create a KnowMore component for the "know more" page
function KnowMore() {
  return <h1>Know More Page</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/know-more" element={<KnowMore />} />
          {/* <Route exact path="/governance" component={Governance} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/developers" component={Developers} />
          <Route exact path="/neuron" component={Neuron} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;