import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Question from "./Question"


export class WouldYouRather extends Component {
    

    componentDidMount() {
        this.props.dispatch(handleInitialData());
        }

        
    render() {
        console.log(this.props)
        return (
            <div>
                <p> 
                <Question />
                </p>
            </div>
        )
    }
}



export default connect()(WouldYouRather)

