import * as types from "../types";
import _ from "lodash";

const initState = {
  contacts: [],
  contact: {}
};

export function contacts(state = initState, action) {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case types.LOAD_CONTACTS:
      newState.contacts = action.payload;
      return newState;
    case types.LOAD_CONTACT:
      newState.contact = action.payload;
      return newState;
    case types.SAVE_CONTACT:
      newState.contacts = action.payload;
      return newState;
    default:
      return state;
  }
}

export function user(state = { user: null }, action) {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case types.SAVE_USER:
      newState.user = action.payload;
      return newState;
    case types.LOAD_USER:
      newState.user = action.payload;
      return newState;
    default:
      return state;
  }
}
