import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing/landing'

class App extends Component {
  render() {
    return (
     <div className="page-container">

             <Landing/>


         <div className="work-section">
         </div>

         <div className="service-section">
         </div>

         <div className="contact-section">
         </div>
     </div>
    );
  }
}

export default App;
