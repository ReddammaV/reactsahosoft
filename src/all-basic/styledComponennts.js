import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => (props.primary ? 'blue' : 'palevioletred')} ;
  border: ${props => (props.primary ? '2px solid blue' : '2px solid palevioletred')} ;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: ${props => (props.primary ? 'blue' : 'palevioletred')} ;
    color: white;
  }
`;



function Index() {
    return (
        <>
            <h1>Hello Sahosoft</h1>
            <h2>Welcome to react js class</h2>
            <Button>Basic Plan</Button>
            <Button primary >Normal Plan</Button>
            <Button primary={false} >Acvance Plan</Button>
        </>
    );
}
ReactDOM.render(<Index />, document.getElementById("root"));