import React, { useRef } from 'react'

import FRInput from './FRInput'

export default function FRParentInput() {
    const inputRef = React.createRef();

    const clickHandler = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <FRInput ref={inputRef}/>
            <button className="btn" onClick={clickHandler}>On Focus</button>
        </div>
    )
}