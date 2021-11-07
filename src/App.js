import React from 'react';
import LoginPage from './pages/LoginPage';

class App extends React.Component {
  render() {
    return (
      <div className="App" id="appContainer" style={{height:"100%"}} path="/">
        <LoginPage/>
      </div>
    );
  }
}

export default App;