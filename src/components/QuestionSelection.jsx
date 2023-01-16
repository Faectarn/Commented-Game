import React from 'react'
import { useRecoilState, useRecoilValue } from "recoil";
import { questionsState, selectedIndexState,  } from '../store/questions/atom';

function QuestionSelection() {
    const questions = useRecoilValue(questionsState)
    const [selectedIndex, setSelectedIndex] = useRecoilState(selectedIndexState);

    const buttons2 = []
    for (let i = 1; i <= (questions.length); i++) {
        buttons2.push(
            <button className="number-button2" key={i} onClick={() => setSelectedIndex(i - 1)}>
                {i}
            </button>
        )
        console.log(questions.id)
    }
    return (
        <div className='buttons2'>
            {buttons2}
        </div>
    )
}

export default QuestionSelection