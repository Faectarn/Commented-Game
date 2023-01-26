import React from 'react'
import { useRecoilState, useRecoilValue } from "recoil"
import { questionsState, selectedIndexState, } from '../store/questions/atom'

function QuestionSelection() {
    const questions = useRecoilValue(questionsState)
    const [selectedIndex, setSelectedIndex] = useRecoilState(selectedIndexState)

    const modalButtons = []
    for (let i = 1; i <= (questions.length); i++) {
        modalButtons.push(
            <button className="number-button2" key={i} onClick={() => setSelectedIndex(i - 1)}>
                {i}
            </button>
        )
    }
    return (
        <div className='modal-buttons'>
            {modalButtons}
        </div>
    )
}

export default QuestionSelection