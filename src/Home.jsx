import './App.css';
import React from 'react';
import LoginPage from './pages/LoginPage';

class Home extends React.Component {
    render() {
        return (
            <div id="homePageContainer">
                <LoginPage/>
            </div>
            
        );
    }

}

export default Home;