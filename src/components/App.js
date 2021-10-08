import React, { Component } from "react";
import { connect } from "react-redux";
import { loggedInUser } from "../actions/loggedInUser";
import { handleInitialData } from "../actions/shared";
import { receiveUsers } from "../actions/users";
import { setUser } from "../actions/users";
import users from "../reducers/users";
import { WouldYouRather } from "./WouldYouRather"

class App extends Component {



    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        console.log(this.props)

        return (
            <div>
                <h1>
                    {Object.keys(this.props.questionsID).map((question) => {
                        return <h1>{question}</h1>

                    })}
                </h1>
                <WouldYouRather />


            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    allState: state,
    questionsID: state.questions

})

export default connect(mapStateToProps)(App)

/*question 4? so the reason
we need to use connect is because of this:


We need a way to have a bridge between our
store and all the functions and data it has access to
and our component
so thats why we need connect
as we are giving access to the app to store






*/