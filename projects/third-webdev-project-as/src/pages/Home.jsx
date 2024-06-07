import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import CardComponent from "../components/CardComponent";
import cardsData from "../assets/cars.json";

const Home = () => {
  return (
    <Container>
      <Typography variant="h1">Car review blog</Typography>
      <Typography variant="h3">What's new?</Typography>
      <Grid container spacing={2}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardComponent
              imageSrc={card.imageSrc}
              title={card.title}
              text={card.text}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
