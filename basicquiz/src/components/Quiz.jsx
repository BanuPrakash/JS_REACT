import React, { Component } from 'react'
import Question from './Question'
import Options from './Options'
export default class Quiz extends Component {
    state = {
        questions: [
            {
                "id": "1",
                "question": "In Magic: The Gathering, what card's flavor text is 'Catch!'?",
                "correct_answer": "Lava Axe",
                "options": [
                    "Stone-Throwing Devils",
                    "Lava Axe",
                    "Ember Shot",
                    "Throwing Knife"
                ]
            },
            {
                "id": "2",
                "question": "Which of these characters in 'Undertale' can the player NOT go on a date with?",
                "correct_answer": "Sheik",
                "options": [
                    "Samus",
                    "Sheik",
                    "Lucas",
                    "Mega Man"
                ]
            },
            {
                "id": "3",
                "question": "Which of these programming languages is a low-level language?",
                "correct_answer": "Assembly",
                "options": [
                    "Assembly",
                    "Python",
                    "C#",
                    "Pascal"
                ]
            },
            {
                "id": "4",
                "question": "Which country gifted the Statue of Liberty to the United States of America?",
                "correct_answer": "France",
                "options": [
                    "Spain",
                    "England",
                    "France",
                    "Germany"
                ]
            }
        ]
    }
    render() {
        return (
            <div>
                <h1>Quiz</h1> {
                    this.state.questions.map((question, index) => (
                        <div key={index}>
                        <Question question={question.question} key={question.id}/>
                        <ul style={{"listStyleType":"none"}}>
                        {
                            question.options.map((option,index) => <Options option={option} key={index}/>)
                        }
                        </ul>
                        </div>
                    ))
                }
                <button type='button'>Submit</button>
            </div>
        )
    }
}
