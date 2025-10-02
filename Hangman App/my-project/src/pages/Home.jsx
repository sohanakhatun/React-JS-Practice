import React, {  useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'
import { WordContext } from '../context/wordContext';
import wordStore from '../store/WordStore';

const Home = () => {

    // const { setWordList  , setWord } = useContext(WordContext);

    const { setWordList , setWord } =wordStore();
    async function fetchWords() {
        const response = await fetch("http://localhost:3000/words");
        const data = await response.json();

        setWordList([...data]);

        const randomIndex = Math.floor(Math.random() * data.length);
        setWord(data[randomIndex]);
    }

    useEffect(() => {
        fetchWords();
    }, [])

    return (
        <>
            <Link to="/play">
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