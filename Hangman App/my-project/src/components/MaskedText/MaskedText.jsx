
import { getMaskedString } from './MaskingUtility'

const MaskedText = ({ text, guessedLetter }) => {
    console.log(text)
    const maskedString = getMaskedString(text, guessedLetter);

    return (
        <>
            {
                maskedString.map((letter, index) => {
                    return (
                        <span key={index} className='p-2 font-bold'>{letter}</span>
                    )
                })
            }
        </>
    )
}

export default MaskedText