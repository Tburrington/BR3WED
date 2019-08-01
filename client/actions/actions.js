import * as types from "./actionTypes";

export const fetchShopsBegin = () => ({
  type: types.FETCH_SHOPS_BEGIN
});

export const setNewLocation = (newLocation) => ({
    // fetch('/location')
    type: types.SETNEWLOCATION,
    payload: newLocation
})

export const fetchShopsFailure = () => ({
  type: types.FETCH_SHOPS_FAILURE,
  payload: { error }
});

export const fetchShops = (newLocation) => dispatch => {
    console.log(newLocation)
  return fetch(`/home/${newLocation}`)
    .then(response => response.json())
    .then(data => {
    //   console.log(data);
      return dispatch({ type: "FETCH_SHOPS_SUCCESS", payload: data });
    })
    .catch(err => {
      console.log(
        "There was an error getting this information from fetchShops"
      );
    });
};

// const runAsyncFunction = async () => {
//     const newLocation = await 
// }




