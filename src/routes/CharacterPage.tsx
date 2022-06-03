import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useQuery,
  gql,
} from "@apollo/client";
import { Box, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { GET_CHARACTERS } from "../api/charactersQueries";

interface CharacterProps {
  id: number;
  name: string;
  gender: string;
  image: string;
  type: string;
}

const CharacterList = () => {

  const { loading, error, data, refetch } = useQuery(GET_CHARACTERS, {variables: { page: 1}});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    
     <>
        <Grid container spacing={2}>
          {data.characters.results.map((props: CharacterProps) => (
            <Grid key={props.id} item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={props.image}
                  alt={props.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <p>{props.name}</p>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {props.type !== "" ? props.type : props.gender }
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))};
        </Grid> 
    
      <Box mb={20} mt={5} sx={{ display: 'flex', flexDirection: 'row',justifyContent: 'center'  }}>
          <Box mr={10}>
            <Button onClick={() => refetch({ page: data.characters.info.prev })} variant="contained">Prev Page</Button>
          </Box>
          <Box>
            <Button onClick={() => refetch({ page: data.characters.info.next })} variant="contained">Next Page</Button>
          </Box>
      </Box>
    </>
  )

}

const CharacterPage = () => (
  <Container>
      <h1>Characters Page</h1>
      <Box m={5}>
        <CharacterList /> 
      </Box> 
  </Container>
);

export default CharacterPage;