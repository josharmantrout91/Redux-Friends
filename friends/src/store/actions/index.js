import axios from "axios";
// changing tabs between friends list, add friend form, and update friend form
export const CHANGE_TABS = "CHANGE_TABS";
// actions for the axios.get() call
export const FRIENDS_DATA_FETCHING = "CHAR_DATA_FETCHING";
export const FRIENDS_DATA_SUCCESS = "CHAR_DATA_SUCCESS";
export const FRIENDS_DATA_FAILURE = "CHAR_DATA_FAILURE";
// actions for the axios.post() call
export const POST_REQUEST_START = "POST_REQUEST_START";
export const POST_REQUEST_SUCCESS = "POST_REQUEST_SUCCESS";
export const POST_REQUEST_FAILURE = "POST_REQUEST_FAILURE";
// actions for the axios.post() call
export const PUT_REQUEST_START = "PUT_REQUEST_START";
export const PUT_REQUEST_SUCCESS = "PUT_REQUEST_SUCCESS";
export const PUT_REQUEST_FAILURE = "PUT_REQUEST_FAILURE";

export const changeTabs = tab => ({ type: CHANGE_TABS, payload: tab });

export const getFriends = () => dispatch => {
  dispatch({ type: FRIENDS_DATA_FETCHING });
  axios
    .get("http://localhost:5000/api/friends")
    .then(res =>
      dispatch({ type: FRIENDS_DATA_SUCCESS, payload: res.data.results })
    )
    .catch(err =>
      dispatch({
        type: FRIENDS_DATA_FAILURE,
        payload: "Your friends all bailed on you"
      })
    );
};
