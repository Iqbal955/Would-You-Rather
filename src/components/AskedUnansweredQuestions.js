//PURPOSE: TO FIGURE OUT IF THE PASSED QUESTIONS ARE ANSWERED OR UNANSWERED 
//AND DISPLAY ACCORDINGLY

import React, { Component } from 'react'
import { connect } from 'react-redux'

export class AskedUnansweredQuestions extends Component {
    render() {
        const votesProps = this.props.optionOne.votes;
        const question = this.props.question
        const users = this.props.users;
        const loggedInUser = this.props.loggedInUser;

        return (
            <div>
                {console.log(loggedInUser.answers)}



                <h1> {Object.keys(users).forEach(function (key) {


                    (Object.keys(users[key].answers).map((user) => {
                        return { user }
                    })
                    )
                })}
                </h1>



            </div>
        )
    }
}

const mapStateToProps = (state, { question }) => {
    return {
        question,
        users: state.users,
        loggedInUser: state.users.sarahedo
    }
}



export default connect(mapStateToProps)(AskedUnansweredQuestions)

/**
 * what is needed?
 *      well clearly i have all of the names of the votes.
 *
 *  so what do you need?
 *
 *      well i need the ID of the answers that these people have voted for
 *
 * why do you need that?
 *
 *      because i want to render all of the questions that people have answered for
 *
 * but why do you need the id?
 *
 *      because the ID will tell me what text to render for
 *
 *
 * ----------------------------------------------------------------
 * ok, but how is the current structure for votes?
 *
 *
                *  votes {
                * [username ]}
                *
 *
 * what is the setup of question?
 *
            id: "lld3ij19219pp6lfuwigz8"
            optionOne:
                    {votes: Array(0), text: 'have horrible short term memory'}
            optionTwo:
                    {votes: Array(0), text: 'have horrible long term memory'}

 *

    so what is the structure to get the ID?



                        id*
                            optionOne
                                      votes


    so you need to go up twice. Whats the purpose of even get votes by them selves
    should you get it in association with the id?

                    well i do get the id of the users that asnwered. Also its good
                    for login, to know ok well who of these answered, but not right now

 *

    so how do you access the votes in association with the id?

                    question.id -> then i have the ID
                        votes then i have the vote



                    can i do something like,
                    if the question.id.optionOne.votes == vores && question.id




    wait! The users has all data about the answers and the questions!!!
                    if you can simply just check the questions that is also within
                    the users.answers object



 * /
 * */