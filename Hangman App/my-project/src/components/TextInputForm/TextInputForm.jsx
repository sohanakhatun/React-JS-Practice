import TextInput from '../Button/TextInput/TextInput'
import Button from '../Button/Button'

const TextInputForm = ({ showHideText ,inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick }) => {
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                    type={inputType}
                    label="Enter a word or a phrase"
                    placeholder='Enter a word or phrase here...'
                    onChangeHandler={handleTextInputChange}
                />
            </div>
            <div>
                <Button
                    styleType='warning'
                    text={showHideText}
                    onClickHandler={handleShowHideClick} />
            </div>
            <div>
                <Button
                    type="submit"
                    styleType='primary'
                    text="Submit" />
            </div>
        </form>
    )
}

export default TextInputForm