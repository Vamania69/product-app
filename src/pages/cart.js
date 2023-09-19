// import React, { useState } from 'react'

// export default function ProductCard({productDetails}) {
//  // a localstate with the list of products in the cart

//   const [cart, setCart] = useState([])
  
//    setCart([...cart, productDetails])
//   const {productName, description, originalPrice, discountedPrice, productImage} = productDetails
//   return (
//     <div className="flex items-center border-b border-gray-200 py-4">
//     {/* Product Image */}
//     <div className="w-16 h-16 mr-4">
//       <img src={productImage[0].productImageUrl}  className="w-full h-full object-cover" />
//     </div>

//     {/* Product Details */}
//     <div className="flex-1">
//       <h3 className="text-lg font-medium">{productName}</h3>
//       <p className="text-gray-500">{description}</p>
//       <p className="text-gray-700">{discountedPrice}</p>
//     </div>

//     {/* Remove from Cart Button */}
//     <button
//       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
     
//     >
//       Remove
//     </button>
//   </div>
//   )
// }


import React from 'react'

export default function Cart() {
  return (
    <div>Cart</div>
  )
}
