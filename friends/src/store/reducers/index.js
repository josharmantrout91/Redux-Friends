import {
  POST_REQUEST_START,
  POST_REQUEST_SUCCESS,
  POST_REQUEST_FAILURE,
  PUT_REQUEST_START,
  PUT_REQUEST_SUCCESS,
  PUT_REQUEST_FAILURE
} from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  // deletingFriend: false,
  // friendDeleted: false,
  friends: [],
  error: null,
  showTab: friends
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST_START:
      return {
        ...state,
        fetchingFriends: true
      };
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: true
      };
    case POST_REQUEST_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: false,
        error: "Y U NO HAVE FRANDS?"
      };
    case PUT_REQUEST_START:
      return {
        ...state,
        updatingFriend: true
      };
    case PUT_REQUEST_SUCCESS:
      return {
        ...state,
        updatingFriend: false,
        friendUpdated: true
      };
    case PUT_REQUEST_FAILURE:
      return {
        ...state,
        updatingFriend: false,
        friendUpdated: false,
        error: "SOME PEOPLE NEVER CHANGE"
      };

    default:
      return state;
  }
};

export default reducer;
