import React, { Component } from "react";
import { connect } from "react-redux";
import { loggedInUser } from "../actions/loggedInUser";
import { handleInitialData } from "../actions/shared";
import { setUser } from "../actions/users";

class App extends Component {

    componentDidMount() {
        
        // this.props.dispatch(handleInitialData());
    }


    render() {

        return (

            <div>
                <button onClick={ () => console.log(this.props.everything)}>Return all</button>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    everything: state,
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