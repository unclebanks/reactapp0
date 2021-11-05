import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function WelcomeCard() {
    const navigate = useNavigate();

    const newGamePage = () => {
        navigate("/loginPage");
    }
    return(
        <div id="welcomeCardContainer">
            <Card style={{maxWidth:"50%", border:"2px solid black", margin:"auto", marginTop:"10%"}}>
                <Card.Header style={{backgroundColor:"lightgray"}}>Welcome To NoNamePokemonGame</Card.Header>
                <Card.Body>
                    <Card.Text>Hi there! Do you want to start a new game or load one already in progress?</Card.Text>
                    <Button variant="success" onClick={newGamePage}>New</Button>
                    <Button>Load</Button>
                </Card.Body>
            </Card>
        </div>
    );
}