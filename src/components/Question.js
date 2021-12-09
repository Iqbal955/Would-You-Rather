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
            //It keeps repeating Answered Question h2
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

export default connect(mapStateToProps)(Question);
