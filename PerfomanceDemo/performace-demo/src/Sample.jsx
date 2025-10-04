import React, { useState } from 'react'

const Sample = () => {
    const [isStudent, setIsStudent] = useState(false);
    console.log({ isStudent })
    function Input({ type, placeholder }) {
        const [s, setS] = useState("")
        return (
            <div>
                <input type={type} value={s} placeholder={placeholder} onChange={(e) => setS(e.target.value)} />
            </div>
        )
    }
    return (
        <>
            <form>
                <Input type="text" placeholder="Enter your name" />
                <br />
                <input
                    type='checkbox'
                    id='student'
                    name='student'
                    value={isStudent}
                    onChange={() => setIsStudent(!isStudent)}
                />
                <label htmlFor='student'>Are you a student ?</label>

                {/* Here, the type property of the element is entirely different before and after the render. (Input / div) , hence , mounting and remounting will happen */}
                {/* {
                    isStudent ? <Input type="text" placeholder="Enter your school name" /> : <div>You will continue as a non student.</div>
                } */}
                <br />

                {/* Here, the type property of the element is not  different before and after the render. (Input / Input) , hence , mounting and remounting will not happen, only re-rendering will happen. In re rendering no DOM node is destroyed hence even on change of state of isStudent the below element remains same. */}
                {/* {
                    isStudent ? <Input type="text" placeholder="Enter your school name" /> : <Input type="text" placeholder="Enter your company name" />
                } */}

                {/* To cause forceful mount / unmount we can pass keys */}
                {
                    isStudent ? <Input type="text" placeholder="Enter your school name" key="school" /> : <Input type="text" placeholder="Enter your company name" key="compay" />
                }
            </form>
        </>
    )
}

export default Sample