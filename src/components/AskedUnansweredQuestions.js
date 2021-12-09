//PURPOSE: TO FIGURE OUT IF THE PASSED QUESTIONS ARE ANSWERED OR UNANSWERED
//AND DISPLAY ACCORDINGLY

import React, { Component } from "react";
import { connect } from "react-redux";

export class AskedUnansweredQuestions extends Component {
  render() {
    const questionData = Object.keys(this.props.questions).map((id) => {
      return this.props.questions[id];
    });

    const loggedInUserAnswer = this.props.loggedInUser?.answers;

    const currentUserID = this.props.loggedInUser?.id;

    const loggedInUserAnswers =
      loggedInUserAnswer &&
      Object.keys(loggedInUserAnswer).map((id) => {
        return id;
      });

    const ans = questionData.filter((question) =>
      loggedInUserAnswers.find((id) => question.id === id)
    );

    const optOne = questionData.filter(
      (quest) => quest.optionOne.votes.toString() === currentUserID
    );
    const optTwo = questionData.filter(
      (quest) => quest.optionTwo.votes.toString() === currentUserID
    );

    const notAns = questionData.filter((question) => !loggedInUserAnswers.includes(question.id)); 
    //First question - Why is this logic for not answered questions not working.

    return (
      <div>
        <p>
          Answered Question
          <div>
            {optOne.map((q) => (
              <p>{q.optionOne.text}</p>
            ))}
          </div>
          <div>
            {optTwo.map((q) => (
              <p>{q.optionTwo.text}</p>
            ))}
          </div>
          <p>......................................................</p>
          {ans.map((ansQ) => {
            return (
              <p>
                {(ansQ.optionOne.votes.includes(currentUserID) && ansQ.optionOne.text) ||
                  (ansQ.optionTwo.votes.includes(currentUserID) && ansQ.optionTwo.text)}
              </p>
            );
          })}
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions }, question) => {
  return {
    questions,
    question,
    users: users,
    loggedInUser: users.sarahedo,
  };
};

export default connect(mapStateToProps)(AskedUnansweredQuestions);
