
import getButtonStyling from "./getButtonStyling";

const Button = ({ text, onClickHandler, styleType = "primary", type = "button" }) => {
    return (
        <button onClick={onClickHandler} type={type} className={`text-lg ${getButtonStyling(styleType)} text-white border-2 rounded-lg p-2`}
        >
            {text}
        </button>
    )
}

export default Button