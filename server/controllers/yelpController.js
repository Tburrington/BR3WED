const fetch = require('node-fetch');

const yelpController = {};

yelpController.getCoffeeShops = (req, res, next) => {
    //update query string location based on location passed in from front end
    console.log(req.params.location);
    fetch(`https://api.yelp.com/v3/businesses/search?term=coffee&location=${req.params.location}`, {
        headers: {
            'Authorization': 'Bearer TAZTubE2D-H6GVD07hlwQPjfMuuiMKHUVf4GY7-CK6HX-OpRnTEm-BK9vIJaarKieFbqM0ZOztmaYDOQ-ibP79eW2hy_HCaRxeRPTQQQnGW46tB5nMtypn1G5oRAXXYx',
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then((data) => {
        // console.log(data);
        const entries = Object.entries(data);
        // console.log(entries);
        //grab only the coffee shops whose ratings exceed 4.5
        const info = (array) => {
            return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(info(val)) : acc.concat(val), []);
        }
        const result = info(entries);
        // console.log(result);
        let values = [];
        for(let i = 0; i < result.length; i++){
           if(result[i].rating >= 4.5){
               values.push({'name': result[i].name, 'image':result[i].image_url, address: result[i].location, 'rating': result[i].rating});
           }
        }
        res.locals.coffeeShops = values;
    
        // console.log(res.locals.coffeeShops);
        return next();
        /*TODO
        filter results based on reviews
        */
    })

    .catch(e => next ({
        log: `yelpController.getCoffeeShops: ERROR: ${typeof e === 'object' ? JSON.stringify(e): e}`,
        message: {err: 'elpController.getCoffeeShops: ERROR: Check server logs for details'}
    }))
    
}

// yelpController.postCoffeeShops = (req, res, next) => {
//     if(!res.locals.coffeeShops) return next({
//         log: 'yelpController.getCoffeeShops: ERROR: Missing required res.locals.coffeeShops data',
//         message: { err: 'yelpController.getCoffeeShops: ERROR: Check server logs for details' },
//     });
    
//     // console.log(res.locals.coffeeShops);
//     return next();
// }

module.exports = yelpController;