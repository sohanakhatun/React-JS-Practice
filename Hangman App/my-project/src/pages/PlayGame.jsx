import { useLocation, useParams, useSearchParams } from "react-router-dom"
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/HangMan/HangMan";

const PlayGame = ({ currentWord }) => {
    // 1st way - use usestate

    // 2nd way using url params. - not good for our game.

    // const [searchParams] = useSearchParams();

    // 3rd way can be path params - again not good for our game as 2nd player can read the value.
    // const params = useParams();

    // 4th Way - use the state property of navigator to show the value of the current word.
    const { state } = useLocation();

    // Guessing Logic:
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);

    function handleLetterClick(letter) {
        if (!state.currentWord.toUpperCase().includes(letter)) {
            setStep(step + 1);
        }
        setGuessedLetters([...guessedLetters, letter]);
    }

    return (
        <div>
            <h1>PlayGame</h1>
            {/* <p>State Method Current Word: {currentWord}</p> */}
            {/* <p>Search Query Params Current Word: {searchParams.get('text')}</p>
            <p>Path Params method Current Word: {params.text}</p> */}
            {/* <p>Navigator state property Method Current Word: {state.currentWord}</p> */}

            <MaskedText text={state.currentWord} guessedLetter={guessedLetters} />

            <div>
                <LetterButtons text={state.currentWord} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
            </div>
            <div>
                <HangMan step={step} />
            </div>
        </div>
    )
}

export default PlayGame;