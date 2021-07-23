import React, { Component } from 'react';
import UpdateComponent from './WithCounter'

class ClickCounter extends Component {

    render() {
        const { count, incrementCount } = this.props
        
        return (
            <button onClick={incrementCount}>
                {this.props.name}
                Clicked {count} Times
            </button>
        )
        
    }
}

export default UpdateComponent(ClickCounter, 5)