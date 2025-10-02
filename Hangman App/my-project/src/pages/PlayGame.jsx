import { useLocation, useParams, useSearchParams } from "react-router-dom"
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useContext, useState } from "react";
import HangMan from "../components/HangMan/HangMan";
import { Link } from "react-router-dom";
import { WordContext } from "../context/wordContext";
import wordStore from "../store/WordStore";
const PlayGame = () => {
    // 1st way - use usestate

    // 2nd way using url params. - not good for our game.

    // const [searchParams] = useSearchParams();

    // 3rd way can be path params - again not good for our game as 2nd player can read the value.
    // const params = useParams();

    // 4th Way - use the state property of navigator to show the value of the current word.
    // const { state } = useLocation();

    // const { wordList, word } = useContext(WordContext);
    const { word } = wordStore();

    // Guessing Logic:
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);

    function handleLetterClick(letter) {
        if (!word.wordValue.toUpperCase().includes(letter)) {
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

            {
                word && (
                    <>
                        <MaskedText text={word} guessedLetter={guessedLetters} />

                        <div>
                            <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
                        </div>
                        <div>
                            <HangMan step={step} />
                        </div>
                    </>
                )
            }

            <Link to="/start" className="text-blue-400">Start Game Link</Link>

        </div>
    )
}

export default PlayGame;