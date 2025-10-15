import { useState } from 'react';

const RefactorComponent = ({ children }) => {

    const [x, setX] = useState(0);
    return (
        <>
            <button onClick={() => setX(x + 1)}>Increment X</button>
            {children}
            {x}
        </>
    )
}

export default RefactorComponent