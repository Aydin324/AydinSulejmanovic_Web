import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import CardComponent from "../components/CardComponent"; // Import your custom card component

const Home = () => {
  // Sample data for card images and titles
  const cards = [
    { imageSrc: "https://via.placeholder.com/150", title: "Card 1" },
    { imageSrc: "https://via.placeholder.com/150", title: "Card 2" },
    { imageSrc: "https://via.placeholder.com/150", title: "Card 3" },
    { imageSrc: "https://via.placeholder.com/150", title: "Card 4" },
    { imageSrc: "https://via.placeholder.com/150", title: "Card 5" },
    { imageSrc: "https://via.placeholder.com/150", title: "Card 6" },
  ];

  return (
    <Container>
      <Typography variant="h1">The best car blog</Typography>
      <Typography variant="h3">What's new?</Typography>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardComponent imageSrc={card.imageSrc} title={card.title} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
