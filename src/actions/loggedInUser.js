export const SET_LOGGEDIN_USER = "SET_LOGGEDIN_USER";
export const SET_WINNER = "SET_WINNER"




export function loggedInUser(id) {
    return {
        type: SET_LOGGEDIN_USER,
        id,
    }

}


export function wonUser(id) {

    return {
        type: SET_WINNER,
        id
    }
}