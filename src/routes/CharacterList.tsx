import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";

const CharacterList = () => (
  <div className="jumbotron">
    <h1>Character List</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Button href="/character" variant="contained">Character</Button>
    {/* <Link to="/character" className="btn btn-primary btn-lg">
      Learn more
    </Link> */}
  </div>
);

export default CharacterList;