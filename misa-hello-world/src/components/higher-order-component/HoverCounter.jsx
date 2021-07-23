import React, { Component } from 'react'
import UpdateComponent from './WithCounter'

class HoverCounter extends Component {

    render() {
        const {count, incrementCount} = this.props
        
        return (
            <div>
                <h2 onMouseOver={incrementCount}> Hoverd {count} times</h2>
            </div>
        )
    }
}

export default UpdateComponent(HoverCounter);