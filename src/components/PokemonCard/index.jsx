import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from "react"
import '../../styles/pokemonCard.css'

export default function PokemonCard({ name, imagem, types }) {

  const typeHandler = () => {
      if(types[1]){
          return types[0].type.name + " | " + types[1].type.name;
      } 
      return types[0].type.name;
  }

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="cardContainer" onClick={handleToggle}>
      <CardMedia
        component="img"
        height="100%"
        image={imagem}
        alt={name}
        className={`cardImage ${isActive ? "selected" : ""}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          {typeHandler()}
        </Typography>
      </CardContent>
    </Card>
  );
}