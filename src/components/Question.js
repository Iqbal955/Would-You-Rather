import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/_DATA";
import AskedUnansweredQuestions from "./AskedUnansweredQuestions";

export class Question extends Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.questions).map((id) => {
          return (
              <AskedUnansweredQuestions
                question={this.props.questions[id]}
               
              />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps({ users, questions, loggedInUser }) {


  //checking the votes, if the user is not part of the votes, then clearly this question is not
  //is unanswered.
  loggedInUser = "sarahedo";

  return {
    loggedInUser,
    questions,
  };
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

export default connect(mapStateToProps)(Question);
