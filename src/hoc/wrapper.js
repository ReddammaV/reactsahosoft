// Higher order component - with arrow function
import React, { useState, useEffect } from 'react'

const wrapper = (Wcomponent) => {
    const newComponent = (props) => {
      console.log(props);
      return (
        <div style={{background: 'green'}}>
          <Wcomponent name="Reddy" {...props} />
        </div>
      )
    }

    return newComponent;
}

export default wrapper;
