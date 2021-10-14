import React, { Component } from 'react'
import { connect } from 'react-redux'

export class AskedUnansweredQuestions extends Component {
    render() {
        return (
            <div>
                <h1>{console.log(this.props)}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state, {question}) => ({
    return {

        
        question,
    }
})



export default connect(mapStateToProps)(AskedUnansweredQuestions)
