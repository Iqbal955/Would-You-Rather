export const SET_LOGGEDIN_USER = "SET_LOGGEDIN_USER";

export function loggedInUser(id) {
    return {
        type: SET_LOGGEDIN_USER,
        id,
    }
}