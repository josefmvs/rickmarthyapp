import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";

const Character = () => (
  <div className="jumbotron">
    <h1>Character View</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Button href="/characterList" variant="contained">Character List</Button>
  </div>
);

export default Character;