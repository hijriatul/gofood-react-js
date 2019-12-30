import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

function CardJenis(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Card
        className={classes.Card}
        onClick={() => {
          props.history.push('/fast-food');
        }}
        style={{ width: 80, height: 80 }}>
        <CardMedia
          className={classes.CardMedia}
          style={{ height: 140 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQO3arG1tURRNXJNi-WxCExfrNMCq3g__mPXLYqcWeq2bxY-pKg&s"
        />
      </Card>
      <Typography className={classes.Typograpy} variant="h5">
        Fast Food
      </Typography>
    </React.Fragment>
  );
}

export default withRouter(CardJenis);
