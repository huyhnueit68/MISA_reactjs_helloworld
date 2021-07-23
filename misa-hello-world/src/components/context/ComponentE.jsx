import React, { Component } from 'react';
import UserContext from './UserContext'
import ComponentF from './ComponentF'

class ComponentE extends Component {

    static contextType = UserContext

    render() {
        return (
            <div>
                Component E Context {this.context}
                <ComponentF/>
            </div>
        )
    }
}

// ComponentE.contextType = UserContext


export default ComponentE