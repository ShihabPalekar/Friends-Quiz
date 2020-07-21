import React from "react"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function QuizCard(props) {

    const handleClick = (buttonName) => (e) => {
        if (buttonName === props.questionDataObject.answ) {
            e.target.style.backgroundColor = "green"
        } else {
            e.target.style.backgroundColor = "red"
        }

        let eTarget = e.target; 

        setTimeout(() => {
            // remove rightanswer from here 

            eTarget.style.backgroundColor = ""
            
            if (buttonName === props.questionDataObject.answ) {
                props.rightAnswer();
                props.nextStep();
            } else {
                props.nextStep();
            }
        }, 850)
    }
    
    return(
        <Card className= "quiz-card">
            <CardContent>
                <h3>{props.questionDataObject.question}</h3>
                <div className= "quiz-card-options">
                    <div 
                        style= {{ margin: 5, backgroundColor : "" }} 
                        onClick= {handleClick(props.questionDataObject.optA)}
                    >
                        {props.questionDataObject.optA}
                    </div>
                    <div 
                        style= {{ margin: 5, backgroundColor : "" }} 
                        onClick= {handleClick(props.questionDataObject.optB)}
                    >
                        {props.questionDataObject.optB}
                    </div>
                    <div 
                        style= {{ margin: 5, backgroundColor : "" }} 
                        onClick= {handleClick(props.questionDataObject.optC)}
                    >
                        {props.questionDataObject.optC}
                    </div>
                    <div 
                        style= {{ margin: 5, backgroundColor : "" }} 
                        onClick= {handleClick(props.questionDataObject.optD)}
                    >
                        {props.questionDataObject.optD}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default QuizCard