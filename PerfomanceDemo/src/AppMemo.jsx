import './App.css'
import SlowComponent from './SlowComponent'
import ButtonModal from './ButtonModal';
import { memo, useState } from 'react';
import Modal from './Modal';

const MemoizedSlowComponent = memo(function ModifiedSlowComponent({ time }) {
    return (<SlowComponent time={time} />)
})
function AppMemo() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <h1>Memoization Starts</h1>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            {isOpen && <Modal close={() => setIsOpen(false)} />}
            <div>
                Something done here
            </div>
            <ButtonModal />
            <MemoizedSlowComponent time={1000} />

        </>
    )
}

export default AppMemo
