import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

function Cardd(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Card
        className={classes.Card}
        onClick={() => {
          props.history.push('/makanan-indonesia');
        }}
        style={{ width: 80, height: 80, marginTop: 20 }}>
        <CardMedia
          className={classes.CardMedia}
          style={{ height: 140 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFYRbAh1O7VMT807dNWjhRCiZfpE710HrTiPk3mZdB9ncGbw8&s"
        />
      </Card>
      <Typography className={classes.Typography} variant="h5">
        Indonesian Food
      </Typography>
    </React.Fragment>
  );
}

export default withRouter(Cardd);
