import React, { Component } from "react";
import { connect } from "react-redux";


export class WouldYouRather extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1> 
                {Object.keys(this.props.questionsID).map((question) => {
                    return <h1>{question}</h1>
               
                })}
                </h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    questionsID: state.questions

})



export default connect(mapStateToProps)(WouldYouRather)

