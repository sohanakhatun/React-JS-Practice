import { create } from 'zustand';

// create function creates a store for us.

const wordStore = create((set) => ({
    wordList: [],
    word: '',
    setWordList: (list) => {
        set((state) => {
            console.log("state", state);
            // whatever you return from here will be the new state
            return {
                ...state,
                wordList: list
            }
        });
    },
    setWord: (word) => {
        set((state) => {
            console.log("state", state);
            // whatever you return from here will be the new state
            return {
                ...state,
                word: word
            }
        });
    },
}));

export default wordStore;
