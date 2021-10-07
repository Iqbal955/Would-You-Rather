import { SET_LOGGEDIN_USER } from "../actions/loggedInUser";
import { SET_WINNER } from "../actions/loggedInUser";

const intialData = {
    name: "Hamzah",
    id: 123
}

export default function loggedInUser (state = {}, action) {
    switch (action.type) {
        case SET_LOGGEDIN_USER:
            {console.log(action.id)}
            return action.id
        case SET_WINNER:
            return action.id
            default:
                return state;
    }
}
