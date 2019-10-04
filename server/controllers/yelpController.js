const fetch = require("node-fetch");

const yelpController = {};

yelpController.getCoffeeShops = (req, res, next) => {
  //update query string location based on location passed in from front end
  console.log(req.params.location);
  fetch(
    `https://api.yelp.com/v3/businesses/search?term=coffee&location=${req.params.location}`,
    {
      headers: {
        Authorization:
          "Bearer TAZTubE2D-H6GVD07hlwQPjfMuuiMKHUVf4GY7-CK6HX-OpRnTEm-BK9vIJaarKieFbqM0ZOztmaYDOQ-ibP79eW2hy_HCaRxeRPTQQQnGW46tB5nMtypn1G5oRAXXYx",
        "Content-Type": "application/json"
      }
    }
  )
    .then(data => data.json())
    .then(data => {
      const entries = Object.entries(data);

      const info = array => {
        return array.reduce(
          (acc, val) =>
            Array.isArray(val) ? acc.concat(info(val)) : acc.concat(val),
          []
        );
      };
      const result = info(entries);

      let values = [];
      for (let i = 0; i < result.length; i++) {
        if (result[i].rating >= 4.5) {
          values.push({
            name: result[i].name,
            image: result[i].image_url,
            address: result[i].location,
            rating: result[i].rating
          });
        }
      }
      res.locals.coffeeShops = values;

      return next();
    })

    .catch(e =>
      next({
        log: `yelpController.getCoffeeShops: ERROR: ${
          typeof e === "object" ? JSON.stringify(e) : e
        }`,
        message: {
          err:
            "elpController.getCoffeeShops: ERROR: Check server logs for details"
        }
      })
    );
};

module.exports = yelpController;
