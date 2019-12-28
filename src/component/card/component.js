import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Cards(props) {
  const [number, setNumber] = useState(0);
  const { nama, harga, jenis, image } = props;

  return (
    <div>
      <Card style={{ width: 200, height: 300 }}>
        <CardMedia style={{ height: 120 }} image={image} />
        <Typography gutterBottom variant="body" component="h1">
          {nama}
        </Typography>
        <Typography variant="body2" component="h3">
          {harga}
        </Typography>
        <Typography gutterBottom variant="h5" component="h5">
          {jenis}
        </Typography>
        <CardActions>
          <Button
            onClick={() => setNumber(number + 1)}
            style={{ backgroundColor: 'red' }}>
            +
          </Button>
          <h1>{number}</h1>
          <Button
            onClick={() => setNumber(number - 1)}
            style={{ backgroundColor: 'blue' }}>
            -
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards;
