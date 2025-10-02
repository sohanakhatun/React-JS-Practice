import React from 'react'

// const Modal = ({ setIsOpen }) => {
//     return (
//         <div>
//             <p> Modal</p>
//             <button onClick={() => setIsOpen(false)}>Close Modal</button>
//         </div>

//     )
// }


const Modal = ({ close }) => {
    return (
        <div>
            <p> Modal</p>
            <button onClick={close}>Close Modal</button>
        </div>

    )
}
export default Modal