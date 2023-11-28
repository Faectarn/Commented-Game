import React from 'react'
import { useRecoilState, useRecoilValue } from "recoil"
import { questionsState, selectedIndexState } from '../store/questions/atom'

function QuestionSelection({ closeModal }) {
    const questions = useRecoilValue(questionsState)
    const [selectedIndex, setSelectedIndex] = useRecoilState(selectedIndexState)

    // Get today's date in YYYYMMDD format
    const today = new Date();
    const formattedToday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

    // Filter questions to show only those with a date earlier than today
    const filteredQuestions = questions.filter(q => parseInt(q.date) < formattedToday);

    const modalButtons = []
    for (let i = 1; i <= filteredQuestions.length; i++) {
        modalButtons.push(
            <button className="number-button2" key={i} onClick={() => {
                setSelectedIndex(i - 1);
                closeModal();
            }}>
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
