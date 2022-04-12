// Pass ref from a parent component to a child component using callbacks
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Input = (props) => {
    return (
        <div>
            <input type="text" ref={props.inputRef} />
        </div>
    )
}

export default class Index extends Component {
    constructor() {
        super();
        this.inputElement = null;
        this.state = {
            value: ""
        };
    }
    saveHandler = () => {
        this.setState({
            value: this.inputElement.value
        });
    }
    render() {
        return (
            <div>
                <h1>React Ref -</h1>
                <h2>Value : {this.state.value}</h2>
                <Input inputRef={e => this.inputElement = e} />
                <button onClick={this.saveHandler} >Save</button>
            </div>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById("root"));



