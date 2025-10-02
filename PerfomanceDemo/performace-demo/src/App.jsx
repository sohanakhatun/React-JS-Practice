import './App.css'
import SlowComponent from './SlowComponent'
import ButtonModal from './ButtonModal';
import { useState } from 'react';
import RefactorComponent from './RefactorComponent';


function App() {
  // Situation 1: let's assume that This state can not be rendered in any other file , it has to be rendered in App.jsx , how can we handle so that this is not delayed.
  // const [x, setX] = useState(0);

  return (
    <>

      {/* <button onClick={() => setX(x + 1)}>Increment X</button> */}

      {/* - Re-render in React : Whenever there is any change in the component , reacts tries to re use the parts of the component that donot need to be changed and only changes the ones that are absolutely required to be changed.
       - re renders in parent causes child to re render but not the vice versa.
     */}

      {/* <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <div>
        Something done here
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen}/>} */}

      {/* Lets move the Modal code to a component so that it becomes a child of App component hence on any change in modal , doesnot re render the App component */}
      {/* <ButtonModal /> */}

      {/* Using Custom Hook */}
      {/* This will still re render the App component as isOpen is an state variable and it is being used in the App component */}
      {/* <button onClick={open}>Open Modal</button>
      {isOpen && <Modal close={close} />} */}
      {/* <ButtonModal />
      <SlowComponent />

      <div>
        Something done here
      </div> */}

      {/* Solution for Situation 1:  */}
      <RefactorComponent>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <div>
          Something done here
        </div>

        <ButtonModal />

        <SlowComponent />

        <div>
          Something done here
        </div>
      </RefactorComponent>
    </>
  )
}

export default App
