import React from 'react'

const Order = () => {
  const orderIds = [1001,1002,1003,1004,1005]
  return (
    <div>
      <ul>
        {
          orderIds.map((item,id) => {
            return (
              <li key={id}>
                {item}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Order