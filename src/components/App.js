import React, {Component} from "react";
import { connect } from "react-redux";
import {handleInitialData} from "../actions/shared";

class App extends Component {
    componentDidMount() {
    this.props.dispatch(handleInitialData());
    }
    render() {
        return (
            <div>
                Start 123
            </div>
        )
    }
}


export default connect()(App)

/*question 4? so the reason 
we need to use connect is because of this:


We need a way to have a bridge between our
store and all the functions and data it has access to
and our component
so thats why we need connect
as we are giving access to the app to store






*/