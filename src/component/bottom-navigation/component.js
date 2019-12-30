import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import { Link } from 'react-router-dom';

function Navigation(props) {
  const { classes } = props;
  return (
    <div>
      <BottomNavigation style={{ marginTop: 470 }} className={classes.Navbar}>
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/makanan-indonesia"
          label="ListMakanan"
          icon={<RestaurantIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/fast-food"
          label="ListMakananFast"
          icon={<RestaurantMenuIcon />}
        />
      </BottomNavigation>
    </div>
  );
}

export default Navigation;
