import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Cards(props) {
  const [number, setNumber] = useState(0);
  const { nama, harga, jenis, image } = props;
  const { classes } = props;

  return (
    <div>
      <Card style={{ width: 380, height: 180, paddingTop: 10 }}>
        <CardMedia style={{ width: 180, height: 180 }} image={image} />
        <Typography
          className={classes.nama}
          gutterBottom
          variant="body"
          component="h2">
          {nama}
        </Typography>
        <Typography className={classes.harga} variant="body1" component="h3">
          {harga}
        </Typography>
        <Typography
          className={classes.jenis}
          gutterBottom
          variant="body1"
          component="h1">
          {jenis}
        </Typography>
        <CardActions className={classes.button}>
          <Button
            onClick={() => setNumber(number + 1)}
            style={{ backgroundColor: 'orange' }}>
            +
          </Button>
          <h1>{number}</h1>
          <Button
            onClick={() => setNumber(number - 1)}
            style={{ backgroundColor: 'gray' }}>
            -
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards;
