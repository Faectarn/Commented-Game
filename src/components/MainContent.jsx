import React, { useEffect, useState } from 'react'
import { useRecoilValue } from "recoil";
import { questionsState, selectedIndexState, } from '../store/questions/atom';

function Content() {
    const questions = useRecoilValue(questionsState)
    const selectedIndex = useRecoilValue(selectedIndexState);

    const [active, setActive] = useState(true)

    const [currentQuestion, setCurrentQuestion] = useState(questions[selectedIndex])

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const [guess, setGuess] = useState('')
    const [guessCount, setGuessCount] = useState(0)

    const [numberOfButtons, setNumberOfButtons] = useState(1)

    const [gif, setGif] = useState("")

    const [score, setScore] = useState(10)

    const currentCorrectAnswer = currentQuestion.correctAnswer
    const numberOfImages = currentQuestion.images.length

    const [feedback, setFeedback] = useState("")

    useEffect(() => {
        setCurrentQuestion(questions[selectedIndex])
        setCurrentImageIndex(0)
        setFeedback(`Lycka till! Du har ${currentQuestion.images.length} gissningar på dig att hitta rätt svar`)
        setGif("")
        setActive(true)
        setGuessCount(0)
    }, [selectedIndex])

    useEffect(() => {
        if (!active) {
            setNumberOfButtons(numberOfImages)
        } else {
            setNumberOfButtons(guessCount + 1)
        }
    }, [guessCount, active])

    // function to fetch a new image and set the correct answer
    const getNewImage = () => {
        if (currentImageIndex + 1 < numberOfImages) {
            setCurrentImageIndex(currentImageIndex + 1)
            setGuessCount(guessCount + 1)
        } else {
            setActive(false)
            setFeedback('Synd! Det rätta svaret var ' + [currentCorrectAnswer[0]])
            setGif(currentQuestion.gif)
        }
    }

    // function to check if the guess is correct
    const isCorrectAnswer = (guess) => {
        return currentCorrectAnswer.find((answer) => answer.toLowerCase() === guess.toLowerCase()) !== undefined
    }

    const guessesLeft = numberOfImages - currentImageIndex - 1

    const feedbackCount = () => {
        if ((guessesLeft) === 1) {
            return `${guessesLeft} gissning kvar`
        } else {
            return `${guessesLeft} gissningar kvar`
        }

    }

    // function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isCorrectAnswer(guess)) {
            setFeedback(`Snyggt! Du hade rätt på gissning ${currentImageIndex + 1}`)
            setGif(currentQuestion.gif)
            setActive(false)
            // setScore(score + 1) // increase score by 1
        } else if (!isCorrectAnswer(guess) || "") {
            setFeedback(feedbackCount())
            getNewImage()

            // setScore(score - 2)
        }
        setGuess("")
    }

    const buttons = []
    for (let i = 1; i <= (numberOfButtons); i++) {
        buttons.push(
            <button className="number-button" key={i} onClick={() => setCurrentImageIndex(i - 1)}>
                {i}
            </button>
        )
    }

    return (
        <div className='main'>
            <h1>
                {currentQuestion.pronouns} {currentQuestion.category} är det som {currentQuestion.type}?
            </h1>
            <div className='imagebox' style={{
                backgroundColor: `${currentQuestion.color}`,
            }}>
                <img src={currentQuestion.images[currentImageIndex]} alt="Current image" className="huvudbild" />
            </div>
            <div className='buttons'>
                {buttons}
            </div>

            <form onSubmit={handleSubmit}>
                <input className="input-field"
                    type="text"
                    id="guess"
                    placeholder="Ange ditt svar"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                />
                <button className="submit-button" type="submit" disabled={!active}>NÄSTA</button>
            </form>
            <h3>{feedback}</h3>
            <img className="gif" src={gif} />

            {/* <p>Score: {score}</p> */}
        </div>
    )
}

export default Content