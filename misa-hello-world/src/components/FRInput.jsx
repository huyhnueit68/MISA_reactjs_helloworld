import React from 'react'

const FRInput = React.forwardRef((props, ref) => {

    return(
        <div className="box-input">
            <input type="text" ref={ref} />
        </div>
    )
})

export default FRInput