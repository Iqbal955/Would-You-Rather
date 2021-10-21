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
                {Object.keys(this.props.questionsID).map((id) => {
                    return <h1>

                    <Question id={id} />
                    </h1>
               
                })}
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    questionsID: state.questions
    

})



export default connect(mapStateToProps)(WouldYouRather)

