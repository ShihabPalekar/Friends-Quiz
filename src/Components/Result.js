import React from "react"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Result(props){
    let scoreRemark;
    props.score > 6 ? 
    scoreRemark = "Looks like we have a F.R.I.E.N.D.S. expert here!" :
    scoreRemark = "Looks like you need to binge watch F.R.I.E.N.D.S. this weekend!"
    return(
        <Card className="result-card">
            <CardContent>
                <div className = "score-statement">
                    <h2>Your score is {props.score}!</h2>
                </div>
                <div className = "score-remark">
                    <h3> {scoreRemark} </h3>
                </div>
            </CardContent>
        </Card>
    )
} 

export default Result