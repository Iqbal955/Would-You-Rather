export const RECEIVE_USERS = "RECEIVE_USERS"
export const SET_USER = 'SET_USER'

export function receiveUsers (users) {

    return {
    type: RECEIVE_USERS,
    users
}
}

export function setUser (userData) {
    return  { type: SET_USER, userData}
}




{/**
//question 5, so why is it that the function
needs to be precisely describing what object it is expecting?

Isn't just a parameter? Meaning that:
in theory, i would expect to do something like this:


export function receiveUsers (abracadabra) {

    return {
    type: RECEIVE_USERS,
    abracadabra
}
}

then in my shared.js I am explicitly saying that the argument 
that is passed to the receiveUsers function is the users object, containing all users
thus the action creator must return us the users

Although, I discovered this by an accidental typo, i typed in the action creator and
i.e:
export function user (user) {
   **user is singular, and also returned user singular as well


Meaning if i pass in any other argument in the action creator function
that does NOT correspond to the object passed to it,
which in this case was users from the shared.js file, 
it will simply ignore it.

My question is why this is? As well as how come I can pass in here
the ID in loggedInUser?


*/}