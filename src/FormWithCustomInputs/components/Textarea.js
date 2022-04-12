import React from 'react'

const TextArea = (props) => {
    return (
        <div className="from-group" >
            <label className="form-label">{props.title}</label>
            <textarea
                className="form-control"
                id={props.name}
                name={props.name}
                type={props.inputtype}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.action}
                rows={props.rows}
                cols={props.cols}
            />
        </div>
    )
}

export default TextArea;