import React from 'react';
import { Route, Routes, Link } from "react-router-dom";

const divStyle = {
    color:'white'
};

class About extends React.Component {
    
    render() {
        return (
            <div style={divStyle}>
                <h2>About Page</h2>
                <main>
                    <p>This section contains information about...</p>
                </main>
            </div>
        )
    }
}



export default About;