import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'

const Home = () => {
    const [word, setWord] = useState('');

    async function fetchWords() {
        const response = await fetch("http://localhost:3000/words");
        const data = await response.json();

        const randomIndex = Math.floor(Math.random() * data.length);
        setWord(data[randomIndex]);
        console.log(word)
    }

    useEffect(() => {
        fetchWords();
    }, [])

    return (
        <>
            <Link to="/play" state={{ currentWord: word }}>
                <Button text="Single Player Game" styleType='primary' ></Button>
            </Link>
            <br />
            <Link to="/start">
                <Button text="Multiple Player Game" styleType='secondary' ></Button>
            </Link>
        </>
    )
}

export default Home