import React from 'react';

function FunctionClick() {

    function clickHandler() {
        alert("huy");
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick;