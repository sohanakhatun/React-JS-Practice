import { Link } from "react-router-dom"

const StartGame = () => {
    return (
        <>
            <h1>Start Game</h1>
            
            <Link to="/play">Play Game</Link>
        </>
    )
}

export default StartGame