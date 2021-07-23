import React, { Component } from 'react';

const UpdateComponent = (OriginalComponent, incrementNumber=1) => {
    
    class NewComponent extends Component {

        constructor(props) {
            super(props);

            this.state = {
                count: 0
            }
        }

        /**
         * 
         */
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber}
            })
        }
        
        render() {
            return (
                <OriginalComponent
                    {...this.props}
                    count={this.state.count}
                    incrementCount={this.incrementCount} />
            ) 
        }
    }

    return NewComponent
}

export default UpdateComponent