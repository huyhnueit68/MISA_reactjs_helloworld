import React, { Component } from 'react'

class Wellcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'huy pham',
            name2: 'huong ly',
            isShow: true,
            index: 1
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.props.userName}</h1>
                <p>Giá trị {this.state.index}</p>
                <button
                    onClick={() => {
                        this.setState({
                            index: this.state.index -1
                        })
                    }}
                >Gỉam</button>
            </div>
            
        )
    }
}

export default Wellcome