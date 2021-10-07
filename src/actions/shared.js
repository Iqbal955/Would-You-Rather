import { getInitialData } from "../utils/api"
import { receiveUsers } from "./users"
import {receiveQuestion} from "./questions"
import { loggedInUser } from "./loggedInUser"
import { wonUser } from "./loggedInUser"


export function handleInitialData () {
    return(dispatch) => {
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestion(questions))
            dispatch(loggedInUser(users))
            dispatch(wonUser(users))
 //maybe to discuss?
            

        })
    }
}


/* For logged In user

How do i figure out, where the logged in user logic should be determined?
Should it be determined in another helper function in data.js? Or is it to be done in a reducer later on?
check line  in api.js for example

*/


/* 

second question

is the above code considered an action creator/thunk 
since we are dispatching actions and are using 

*/