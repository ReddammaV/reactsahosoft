// Student3.js
import { useContext } from 'react'
import myContext from './Context'


const Student3 = () => {
  const myContextData = useContext(myContext);
  return (
    <>
      <h1>Hello {myContextData.name} and age is {myContextData.age}</h1>
    </>
  )
}

export default Student3;