import React from "react";
import { Card, CardMedia, Typography } from "@mui/material";

const CardComponent = ({ imageSrc, title }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={imageSrc} alt={title} />
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
    </Card>
  );
};

export default CardComponent;
