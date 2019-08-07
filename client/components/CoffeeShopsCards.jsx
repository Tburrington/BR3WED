import React from 'react';
import Fade from 'react-reveal/Fade';
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/icons';
import { useState } from 'react';
import { blueGrey, green, yellow, blue} from '@material-ui/core/colors';
// import { blueGrey } from '@material-ui/core/colors';
const CoffeeShop = (props) => {
    // const [color, setColor] = useState({color: black});


    return (
      
        <div className="cafeContainer">
           <Fade>
            <img src={props.props.image} className="images"/>
            </Fade>
        
        <div className="text">
        <div className="border"></div>
        <i className="material-icons">mood</i><i className="material-icons">mood_bad</i>
            <h1>Name: {props.props.name}</h1>
            <h1>Address: {props.props.address.address1}</h1>
            <h1>City: {props.props.address.city}</h1>
            <h1>State: {props.props.address.state}</h1>
            <h1>Rating: {props.props.rating}</h1>
            </div>
   
        </div>

    )
}

export default CoffeeShop;