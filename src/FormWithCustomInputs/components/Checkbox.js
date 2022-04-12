import React from 'react'

const CheckBox = (props) => {
    return (
        <div className="from-group" >
            <label className="form-label">{props.title}</label>
            <div className="checkbox" >
                {
                    props.options.map(option => {
                        return (
                            <label key={option} className="checkbox-inline" >
                                <input
                                    id={props.name}
                                    name={props.name}
                                    type="checkbox"
                                    value={option}
                                    onChange={props.action}
                                    checked={props.selectedOptions.indexOf(option) > -1}
                                /> {option}
                            </label>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default CheckBox;