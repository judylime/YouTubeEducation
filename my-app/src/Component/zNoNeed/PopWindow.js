import React, { Component } from 'react';
import "../../index.css"

class PopWindow extends Component {

    render() {
        return (
            <div className="popWindow"
                style={{
                    transform:this.props.show ?"translateY(0)":"translateY(-100vh)",
                    opacity:this.props.show ? "1":0
                }}
            > 
                <h4>This is pop out window</h4>
                <input type="input tags"/>
                <button>OK</button>
                <button onClick={this.props.closeWindow}>Cancle</button>
            </div>
        );
    }
}

export default PopWindow;