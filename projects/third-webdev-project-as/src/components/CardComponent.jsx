import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const CardComponent = ({ imageSrc, title, text }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={imageSrc} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
