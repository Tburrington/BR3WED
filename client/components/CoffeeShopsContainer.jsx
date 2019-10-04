import React from "react";
import CoffeeShop from "./CoffeeShopsCards.jsx";
import CoffeeShopQuery from "./CoffeeShopQuery.jsx";
import { connect } from "react-redux";
import { fetchShops, setNewLocation } from "../actions/actions";

const mapStateToProps = store => ({
  CoffeeShopList: store.coffeeShops.CoffeeShopList,
  location: store.coffeeShops.location,
 
});

const mapDispatchToProps = dispatch => ({
  fetchShops: e => dispatch(fetchShops(e)),
  setNewLocation: e => dispatch(setNewLocation(e.target.value)),

});

export const CoffeeShopsContainer = props => {
  let coffeeShops = [];
  for (let i = 0; i < props.CoffeeShopList.length; i++) {
    coffeeShops.push(<CoffeeShop key={i} props={props.CoffeeShopList[i]}/>);
  }
  return (
    <div>
      <CoffeeShopQuery
        newLocation={props.location}
        setNewLocation={props.setNewLocation}
        fetchShops={props.fetchShops}
      />

      <div className="container">{coffeeShops}</div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeShopsContainer);
