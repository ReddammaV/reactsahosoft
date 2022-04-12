import React from 'react'

const Select = (props) => {
    return (
        <div className="from-group" >
            <label className="form-label">{props.title}</label>
            <select
                id={props.name}
                name={props.name}
                value={props.value}
                className="form-control"
                onChange={props.action}
            >
                <option value="" disabled > {props.placeholder} </option>
                {
                    props.options.map(option => {
                        return (
                            <option key={option}
                                value={option}
                            >
                                {option}
                            </option>
                        );
                    })
                }
            </select>
        </div>
    );
}

export default Select;