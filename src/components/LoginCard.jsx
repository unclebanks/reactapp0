import React from "react";
import { Button, Card } from "react-bootstrap";
import '../styles/LoginCard.css';
import RegisterPage from "../pages/RegisterPage";
import axios from "axios";

export default function LoginCard() {

    const checkLogin = () => {
        let username = document.getElementById("loginUserName");
        let password = document.getElementById("loginPassword");
        let credentials = localStorage.getItem(`${username}React0`);
        if (!credentials || password !== credentials) {
            alert("Please register an account.");
        }
    }
    const moveToRegister = () => {
        let appContainer = document.getElementById("appContainer");
        let regiPage = document.getElementById("registerPageContainer")
        appContainer.children[0].remove();
    }

    return(
        <div id="loginCardContainer">
            <Card style={{width:"30%", margin:"auto", border:"1px solid gray"}}>
                <Card.Title style={{border:"2px solid darkgray"}}>Welcome! Please Login or Register</Card.Title>
                <Card.Body id="loginCardBody">
                    <span id="loginUserName">UserName: <input type="text"/></span>
                    <span id="loginPassword">Password: <input type="text"/></span>
                    <div id="loginCardBodyButtons">
                        <Button id="lcLogin" onClick={checkLogin}>Login</Button>
                        <Button id="lcRegister" variant="success" onClick={moveToRegister}>Register</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}