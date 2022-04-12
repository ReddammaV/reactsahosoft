import React from 'react'

const Input = (props) => {
    return (
        <div className="from-group" >
            <label className="form-label">{props.title}</label>
            <input
                className="form-control"
                id={props.name}
                name={props.name}
                type={props.inputtype}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.action}
            />
        </div>
    )
}

export default Input;