import React from 'react'
import { useState } from 'react'
import Modal from './Modal';
import useModalDialog from './hooks/useModalDialog';

const ButtonModal = () => {
    // const [isOpen, setIsOpen] = useState(false);

      const { isOpen, open, close } = useModalDialog();
 
    return (
        // <div>
        //     ButtonModal
        //     <button onClick={() => setIsOpen(true)}>Open Modal</button>
        //     <div>
        //         Something done here
        //     </div>
        //     {isOpen && <Modal setIsOpen={setIsOpen} />}
        // </div>

         <div>
            <p>ButtonModal</p>
            <button onClick={open}>Open Modal</button>
            <div>
                Something done here
            </div>
            {isOpen && <Modal close={close} />}
        </div>
    )
}

export default ButtonModal