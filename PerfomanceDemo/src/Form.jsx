import React, { forwardRef, useRef, useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");

  //   function Input({ type, placeholder, inputRef }) {
  //     return (
  //       <div>
  //         <input type={type} placeholder={placeholder} ref={inputRef} />
  //       </div>
  //     );
  //   }
  const Input = forwardRef(function InputComponent({ type, placeholder }, ref) {
    return (
      <div>
        <input type={type} placeholder={placeholder} ref={ref} />
      </div>
    );
  });

  // On click of the button the input should get focused.
  const customRef = useRef(0);
  const inputRef = useRef(null);
  const CustomInputRef = useRef(null);
  function submitHandler(e) {
    e.preventDefault();
    // 1st way
    // document.getElementById("emailInput").focus();
    customRef.current = customRef.current + 1;
    inputRef.current.focus();
  }

  function handleCustomClick(e) {
    e.preventDefault();
    CustomInputRef.current.focus();
  }

  return (
    <>
      <div>Form</div>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          id="emailInput"
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button id="click">Click</button>

        <br />
        <p>Custom Input</p>
        {/* <Input
          type="text"
          placeholder="Write Something"
          inputRef={CustomInputRef}
        /> */}
        
        <Input
          type="text"
          placeholder="Write Something 2"
          ref={CustomInputRef}
        />

        <button id="moreClick" onClick={handleCustomClick}>
          Click Custom Input
        </button>
      </form>
    </>
  );
};

export default Form;
