import React, { Component } from "react";
import { connect } from "react-redux";
import { loggedInUser } from "../actions/loggedInUser";
import { handleInitialData } from "../actions/shared";
import { receiveUsers } from "../actions/users";
import { setUser } from "../actions/users";
import users from "../reducers/users";

class App extends Component {


    
    componentDidMount() {
//this.props.dispatch(handleInitialData());
      
    }



    //dispatch a new user to the state. So need to
    //create map dispatch to proposal
    // create function that will dispatch it to the props?
    //call function


    render() {

        let newusers = {
            DRAKE: {
              id: 'ChampagnePapi',
              name: 'Aubraham Graham',
              avatarURL: "",
              answers: {
                "8xf0y6ziyjabvozdd253nd": 'optionOne',
                "6ni6ok3ym7mf1p33lnez": 'optionTwo',
                "am8ehyc8byjqgar0jgpub9": 'optionTwo',
                "loxhs1bqm25b708cmbf3g": 'optionTwo'
              },
              questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
            },
        }
      const {users, questions, loggedInUser, allWinners} = this.props;
        return (
            <div>
                <h1>{questions? "Questions loaded" : "Missing Questions"}</h1>
                <h1>{users ? "User data loaded" : "Missing Users"}</h1>
                <h1>{loggedInUser ? "Logged In User received" : "Missing logged In User"}</h1>
                <h1>{users && Object.keys(users).map(user => {user})}</h1>
                <button onClick={() => console.log(this.props)}>All props</button>
                <button onClick={() => this.props.loggedUser(200)}>Add Winner</button>
                <button onClick={() => this.props.addUser(newusers)}>Add User</button>
                <button onClick={() => this.props.initialData()}>inital date from store</button>
               
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    allState: state,
    users: state.users, 
    questions: state.questions,
    loggedInUser: state.loggedInUser

   
})


const mapDispatchToProps = dispatch => ({
    loggedUser: (id) => dispatch(loggedInUser(id)),
    initialData: () => dispatch(handleInitialData()),
    addUser: (users) => dispatch(receiveUsers(users))
})


export default connect(mapStateToProps, mapDispatchToProps)(App)

/*question 4? so the reason
we need to use connect is because of this:


We need a way to have a bridge between our
store and all the functions and data it has access to
and our component
so thats why we need connect
as we are giving access to the app to store






*/