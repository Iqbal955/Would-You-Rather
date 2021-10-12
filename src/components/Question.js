import React, { Component } from 'react'
import { connect } from 'react-redux'
import {formatQuestion} from "../utils/_DATA"

export class Question extends Component {
    render() {
        return (
            <div>
            
    {console.log(this.props)}
 
            </div>
        )
    }
}

function mapStateToProps({users, questions, loggedInUser},{id}) {
    const question = questions[id];
   const {optionOne, optionTwo, author} = question


 

    return {
        loggedInUser, 
    question: formatQuestion({optionOne, optionTwo, author})

    }
}


    /* 
    //I need the specific question, not all questions. 
    //where is the question you want stored? 
    // its stored in dashboards 

    //so how do we get access to a a specific one?
    //we give the question 
    //////compoennt the id of the specific question to render
    //so what is that? its a prop.
    //correct. So how do we get access? Well, first and foremost we can pass it as a
    //arg in mapStateToProps. 
    //
    // so what do we need in mapStateToProps?
            we need the ID.

    OK, what other things do need to be displayed that the store has?
    user -> what specific user did this question belong to?
    loggedInUser -> who asked this question?
    questions -> we need all questions, and then need a specific ID to look up.

    */


export default connect(mapStateToProps)(Question)
