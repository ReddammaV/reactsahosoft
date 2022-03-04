// Conditional Rendering with enums
import React, { Component } from 'react'
import ReactDOM from 'react-dom' 

const WhishList = () => {
  return(
    <div>
      <button>WhishList</button>
    </div>
  )
}

const Buy = () => {
  return(
    <div>
      <button>Buy</button>
    </div>
  )
}

const SoldOut = () => {
  return(
    <div>
      <button>SoldOut</button>
    </div>
  )
}

const Enum_Cart_States = {
  wishlist : <WhishList/>,
  buy : <Buy/>,
  soldout : <SoldOut/>
}

function CartState({cState}){
  return(
    <div>
      {Enum_Cart_States[cState]}
    </div>
  )
}

class Cart extends Component {
render(){
  return(
    <div>
      <h1>Product Image</h1>
      <CartState cState="wishlist" />
      <CartState cState="buy" />
      <CartState cState="soldout" />
    </div>
  )
}
}

ReactDOM.render(<Cart />, document.getElementById('root'))
