import { useState } from 'react'
const TodoInput = ({ onSubmit }) => {
    const [inputValue, setinputValue] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        onSubmit?.(inputValue)
        setinputValue('');
    }
    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input type='text'  value={inputValue}  placeholder='Add your todos here' onChange={(e) => { setinputValue(e.target.value) }} />
                <button>Add Todo</button>
            </form>
        </>
    )
}

export default TodoInput