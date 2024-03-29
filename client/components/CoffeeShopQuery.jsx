import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}));

const CoffeeShopQuery = props => {
  const classes = useStyles();
  return (
    <div className="query">
      <input
        className="input"
        value={props.newLocation}
        onChange={e => props.setNewLocation(e)}
        id="input"
        type="text"
        placeholder="Search for Coffee Shops in your area"
      ></input>

      <Button
        onClick={() => props.fetchShops(props.newLocation)}
        variant="contained"
        color="primary"
        className={classes.button}
      ></Button>
    </div>
  );
};

export default CoffeeShopQuery;
