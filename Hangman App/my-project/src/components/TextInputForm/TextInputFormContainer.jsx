import { useState, useEffect } from 'react';
import TextInputForm from './TextInputForm';
import { useNavigate } from 'react-router-dom';

const TextInputFormContainer = () => {
    const [inputType, setInputType] = useState("password");
    const [showHideText, setShowHideText] = useState("Show");
    const [value, setValue] = useState("");
    const navigate = useNavigate();
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted", value)
        if (value) {
            //  navigate('/play')
            // navigate(`/play?text=${value}`);
            // navigate(`/play/${value}`);
            navigate('/play', { state: { currentWord: {wordValue: value} } })
        }
    }

    function handleTextInputChange(event) {
        event.preventDefault();
        setValue(event.target.value);
        console.log(value)
    }

    function handleShowHideClick(event) {
        event.preventDefault();
        if (inputType == "text") {
            setInputType("password");
            setShowHideText("Show")
        } else {
            setInputType("text");
            setShowHideText("Hide");
        }
    }

    useEffect(() => {
        console.log("Component loaded")
    })


    return (
        <TextInputForm
            inputType={inputType}
            showHideText={showHideText}
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
        />
    )
}

export default TextInputFormContainer