import React from "react"
import quizQuestions from "../quizQuestions"
import QuizCard from "./QuizCard"
import Result from "./Result"

class QuizPage extends React.Component {
    constructor(){
        super();
        this.state = {
            step: 0,
            quizCompleted : false,
            score: 0
        }
    }

    nextStep = () => {
        (this.state.step < quizQuestions.length - 1) ?
        this.setState({ step: this.state.step + 1}) :
        this.setState({ quizCompleted: true })
    }

    rightAnswer = () => {
        this.setState({ score: this.state.score + 1 })
    }

    render(){
        return(
            !this.state.quizCompleted ? 
            <div className="quiz-page">
                <QuizCard
                    questionDataObject= {quizQuestions[this.state.step]} 
                    nextStep= {this.nextStep} 
                    rightAnswer = {this.rightAnswer}               
                />
            </div>
            :
            <div>
                <Result 
                    score = {this.state.score}
                />
            </div>
        )
    }
}

export default QuizPage