import React from "react";
import { Card } from "react-bootstrap";

export default function RegisterPage() {
    return(
        <div id="registerPageContainer">
            <Card>
                <Card.Header>Register</Card.Header>
                <Card.Body>
                    <span>UserName: <input id="registerUserName"></input></span>
                </Card.Body>
            </Card>
        </div>
    );
}