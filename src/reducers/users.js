import { RECEIVE_USERS, SET_USER } from "../actions/users";

export const intialData = {
  name: "Hamzah",
  id: 123,
};
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}
