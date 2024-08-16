import React from 'react'

const IndividualProduct = (prop) => {
  return (
    <div>
        <ul>
      {
        prop.map((product)=>{
            return(
                <h1>{product.name}</h1>
            )
        })
      }
      </ul>
    </div>
  )
}

export default IndividualProduct
