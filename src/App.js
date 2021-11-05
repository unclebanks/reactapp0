import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import About from './About';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{height:"100%"}}>
        <Routes>
          <Route exact path="/" element={<LoginPage/>}>
          </Route>
          <Route path="/About" element={<About/>}>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;