import React from 'react';
import Fade from 'react-reveal/Fade';
const CoffeeShop = (props) => {
    return (
      
        <div id="container">
           <Fade>
            <img src={props.props.image} className="images"/>
            </Fade>

            <h1>Name: {props.props.name}</h1>
            <h1>Address: {props.props.address.address1}</h1>
            <h1>City: {props.props.address.city}</h1>
            <h1>State: {props.props.address.state}</h1>
            <h1>Rating: {props.props.rating}</h1>

   
        </div>

    )
}

export default CoffeeShop;