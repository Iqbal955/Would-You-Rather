import { RECEIVE_USERS, SET_USER } from "../actions/users";

const user1 = {
    name: "Abdul Rahman",
    username: 'R4hm4n',
    password: "",
    
}


export default function users (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS :
            {console.log(action.users)}
           return {
               ...state,
               ...action.users,     
           }  
        case SET_USER :
            return {...state, currentUser: action.userData}
           default: 
           return state;

    }



}