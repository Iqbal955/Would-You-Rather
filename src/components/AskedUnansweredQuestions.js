//PURPOSE: TO FIGURE OUT IF THE PASSED QUESTIONS ARE ANSWERED OR UNANSWERED
//AND DISPLAY ACCORDINGLY

import React, { Component } from "react";
import { connect } from "react-redux";

export class AskedUnansweredQuestions extends Component {
  render() {
    const questionData = this.props.question;

    const loggedInUserAnswer = this.props.loggedInUser.answers;

    const currentUserID = this.props.loggedInUser.id;

    let optionOne = "";

    let optionTwo = "";

    const loggedInUserAnswers = Object.keys(loggedInUserAnswer).map((id) => {
      return id;
    });

    const ans = loggedInUserAnswers.filter(
      (id) => questionData.question.id === id
    );

    const notAns = loggedInUserAnswers.filter(
      (notAnsid) => questionData.question.id !== notAnsid
    ); //First question - Why is this logic for not answered questions not working.

    return (
      <div>
        <p>
          Answered Question
          {ans.map(() => {
            
            // Second question - Why is nothing being returned despite it being logged in the console. 
            optionOne = questionData.question.optionOne.votes.toString();
            {
              optionOne == currentUserID && (
                <h2>
                  Option One {questionData.question.optionOne.text}
                </h2>
              );

              optionTwo = questionData.question.optionTwo.votes.toString();
              {
                optionTwo == currentUserID && (
                  <h2>
                    
                    Option Two
                    {console.log(questionData.question.optionTwo.text)}
                  </h2>
                );
              }
            }
          })}
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ users }, question) => {
  return {
    question,
    users: users,
    loggedInUser: users.sarahedo,
  };
};

export default connect(mapStateToProps)(AskedUnansweredQuestions);
