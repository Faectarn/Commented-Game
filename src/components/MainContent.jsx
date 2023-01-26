import React, { useEffect, useState } from 'react'
import { useRecoilValue } from "recoil"
import { questionsState, selectedIndexState, } from '../store/questions/atom'

function MainContent() {
    const questions = useRecoilValue(questionsState)
    const selectedIndex = useRecoilValue(selectedIndexState)
    const [input, setInput] = useState("")
    const [matchingHints, setMatchingHints] = useState([])
    const [active, setActive] = useState(true)

    const [currentQuestion, setCurrentQuestion] = useState(questions[selectedIndex])

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const [guess, setGuess] = useState('')
    const [guessCount, setGuessCount] = useState(0)

    const [numberOfButtons, setNumberOfButtons] = useState(1)

    const [gif, setGif] = useState("")

    const currentCorrectAnswer = currentQuestion.correctAnswer
    const numberOfImages = currentQuestion.images.length
    const gameRound = guessCount + 1

    const [feedback, setFeedback] = useState("")

    useEffect(() => {
        setCurrentQuestion(questions[selectedIndex])
        setCurrentImageIndex(0)
        setFeedback(`Lycka till! Du har ${questions[selectedIndex].images.length} gissningar på dig att hitta rätt svar`)
        setGif("")
        setActive(true)
        setGuessCount(0)
    }, [selectedIndex])

    useEffect(() => {
        if (!active) {
            setNumberOfButtons(numberOfImages)
        } else {
            setNumberOfButtons(gameRound)
        }
    }, [guessCount, active])


    const getNewImage = () => {
        if (gameRound < numberOfImages) {
            setGuessCount(guessCount + 1)
            setCurrentImageIndex(gameRound)
        } else {
            setActive(false)
            setFeedback('Synd! Det rätta svaret var ' + [currentCorrectAnswer[0]])
            setGif(currentQuestion.gif)
        }
    }

    const isCorrectAnswer = (guess) => {
        return currentCorrectAnswer.find((answer) => answer.toLowerCase() === guess.toLowerCase()) !== undefined
    }

    const guessesLeft = numberOfImages - guessCount - 1

    const feedbackCount = () => {
        if ((guessesLeft) === 1) {
            return `${guessesLeft} gissning kvar`
        } else {
            return `${guessesLeft} gissningar kvar`
        }
    }

    const adjectives = [
        'Snyggt', 'Najs', 'Inte illa', 'Bra där', 'Bra jobbat', 'Såja', 'Härligt',
    ]

    const numeral = [
        'första', 'andra', 'tredje', 'fjärde', 'femte', 'sjätte', 'sjunde', 'åttonde', 'nionde', 'tionde',
    ]

    const emojies = [
        '👍', '👌', '😀', '🙂', '😁', '😊', '🤩', '😎',
    ]

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]

    const randomEmoji = emojies[Math.floor(Math.random() * emojies.length)]

    const winFeedback = () => {
        if (guessesLeft === 0) {
            setFeedback(`Nära ögat! Du hade rätt på den sista gissningen 😅`)
        } else {
            setFeedback(`${randomAdjective}! Du hade rätt på ${numeral[currentImageIndex]} gissningen ${randomEmoji}`)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInput("")
        setMatchingHints([])
        if (isCorrectAnswer(guess)) {
            winFeedback()
            setGif(currentQuestion.gif)
            setActive(false)
        } else if (!isCorrectAnswer(guess) || "") {
            setFeedback(feedbackCount())
            getNewImage()
            setGuess("")
        }
    }

    const handleInput = (e) => {
        setInput(e.target.value)
        setGuess(e.target.value)
        if (e.target.value.length < 2) {
            setMatchingHints([])
        } else setMatchingHints(
            currentQuestion.options
                .filter((title) => title.toLowerCase().includes(e.target.value.toLowerCase()))
                .sort()
        )
    }

    const handleClick = (guess) => {
        setInput(guess)
        setMatchingHints([])
        setGuess(guess)
    }

    const buttons = []
    for (let i = 1; i <= (numberOfButtons); i++) {
        buttons.push(
            <button className="number-button" key={i} onClick={() => setCurrentImageIndex(i - 1)}>
                {i}
            </button>
        )
    }

        console.log(currentImageIndex)
console.log(guessCount)

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
                    autoComplete='off'
                    value={input}
                    onChange={handleInput}
                />
                <button className="submit-button" type="submit" disabled={!active}>{input.length > 0 ? 'SVARA' : 'NÄSTA'}</button>

            </form>
            <ul>
                {matchingHints.map((e) => (
                    <li key={e} onClick={() => handleClick(e)}>
                        {e}
                    </li>
                ))}
            </ul>
            <h3>{feedback}</h3>
            <img className="gif" src={gif} />
        </div>
    )
}

export default MainContent