import React from 'react'
import ReactDOM from 'react-dom'

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    /**
     * 
     * @param {*} event 
     */
    handleMouseMove = (event) => {
        const { clientX, clientY } = event
        this.setState({
            x: clientX,
            y: clientY,
        })
    }

    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

export default Mouse