import React from "react";
import { Container, Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        About
      </Typography>
      <Box
        sx={{
          width: "80%",
          margin: "32px auto 0",
          padding: "16px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <Typography variant="body1">
          Welcome to our car review blog! At CarEnthusiast, we're passionate
          about all things automotive. Whether you're a seasoned petrolhead or
          just looking for your next ride, our comprehensive reviews and expert
          insights have got you covered. From luxury sedans to rugged SUVs and
          high-performance sports cars, we test and evaluate the latest models
          to help you make informed decisions. Our team of automotive
          enthusiasts brings years of experience and expertise to every review,
          ensuring accuracy and reliability in our assessments. Join us on a
          journey through the world of automobiles, where we explore the latest
          trends, innovations, and technologies shaping the automotive industry.
          Whether you're seeking practical advice or simply want to indulge your
          passion for cars, CarEnthusiast is your go-to destination for all
          things automotive.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
