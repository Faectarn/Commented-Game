import React, { useEffect, useState } from 'react'
import { useRecoilValue } from "recoil"
import { questionsState, selectedIndexState, } from '../store/questions/atom'

function ReviewsContent() {
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
        setFeedback(`Good Luck! You have ${questions[selectedIndex].images.length} guesses to get the right answer`)
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
            setFeedback('Too Bad! The Correct answer was ' + [currentCorrectAnswer[0]])
            setGif(currentQuestion.gif)
        }
    }

    const isCorrectAnswer = (guess) => {
        return currentCorrectAnswer.find((answer) => answer.toLowerCase() === guess.toLowerCase()) !== undefined
    }

    const guessesLeft = numberOfImages - guessCount - 1

    const feedbackCount = () => {
        if ((guessesLeft) === 1) {
            return `${guessesLeft} guess left`
        } else {
            return `${guessesLeft} guesses left`
        }
    }

    const adjectives = [
        'Well done', 'Nice', 'Not bad', 'Excellent', 'Wow', 'Superb', 'Impressive', 'Fantastic', 'Brilliant', 'Outstanding', 'Marvelous', 'Terrific', 'Great', 'Amazing', 'Stellar', 'Splendid', 'Remarkable', 'Awesome', 'Exceptional', 'Incredible'
    ]

    const numeral = [
        'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eight', 'ninth', 'tenth',
    ]

    const emojies = [
        '👍', '👌', '😀', '🙂', '😁', '😊', '🤩', '😎',
    ]

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]

    const randomEmoji = emojies[Math.floor(Math.random() * emojies.length)]

    const winFeedback = () => {
        if (guessesLeft === 0) {
            setFeedback(`Phew! You were correct on the last guess 😅`)
        } else {
            setFeedback(`${randomAdjective}! You were correct at the ${numeral[currentImageIndex]} guess ${randomEmoji}`)
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
        const inputValue = e.target.value.toLowerCase();
        setInput(e.target.value);
        setGuess(e.target.value);

        if (inputValue.length < 2) {
            setMatchingHints([]);
        } else {
            setMatchingHints(
                currentQuestion.options
                    .filter((title) => title.toLowerCase().includes(inputValue))
                    .sort((a, b) => {
                        // Normalize titles by removing 'the ' for sorting comparison
                        const normalize = (title) => title.toLowerCase().replace(/^the /, '');
                        const normalizedA = normalize(a);
                        const normalizedB = normalize(b);

                        // Check if the normalized titles start with the input
                        const startsWithInputA = normalizedA.startsWith(inputValue);
                        const startsWithInputB = normalizedB.startsWith(inputValue);

                        // Prioritize titles that start with the input, after ignoring 'the'
                        if (startsWithInputA && !startsWithInputB) {
                            return -1;
                        }
                        if (!startsWithInputA && startsWithInputB) {
                            return 1;
                        }

                        // If both or neither start with the input, sort alphabetically
                        return a.toLowerCase().localeCompare(b.toLowerCase());
                    })
            );
        }
    };

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
            {/* <h1>
                Which movie is being reviewed?
            </h1> */}
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
                    placeholder="Search for movie or click next to skip"
                    autoComplete='off'
                    value={input}
                    onChange={handleInput}
                />
                <button className="submit-button" type="submit" disabled={!active}>{input.length > 0 ? 'CONFIRM' : 'NEXT'}</button>

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

export default ReviewsContent