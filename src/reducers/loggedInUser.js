import { SET_LOGGEDIN_USER } from "../actions/loggedInUser";



export default function loggedInUser (state = null, action) {
    switch (action.type) {
        case SET_LOGGEDIN_USER:
            {console.log(action.id)}
            return action.id
        default:
            return state
    }
}
