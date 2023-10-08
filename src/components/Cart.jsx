import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/store";

function Cart() {
  const noOfItems = useSelector((state) => state.noOfItems);
  const totalValue = useSelector((state) => state.value);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  
  return (
    <div className="bg-white min-h-screen p-4 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <h1 className="text-red-500 font-semibold text-3xl mb-4">
          Shopping Cart
        </h1>
        <div className="font-semibold mb-2 text-blue-500 text-xl">
          Total Amount: ${totalValue}
        </div>
        <div className="text-xl mb-4 text-red-500 font-semibold">
          Items In The Cart: {noOfItems}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {cart.map((eachItem) => (
          <div
            key={eachItem.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center"
          >
            <img
              src={eachItem.thumbnail}
              alt={eachItem.title}
              className="w-20 h-20 rounded-full m-5"
            />
            <div className="flex-grow">
              <div className="text-xl mb-2 font-bold text-gray-800">
                {eachItem.title}
              </div>
              <div className="text-sm font-bold text-blue-500 mb-2">
                {eachItem.description}
              </div>
              <div className="text-xl text-red-500">${eachItem.price}</div>
            </div>
            <div className="flex items-center">
           
              <button className="bg-red-500 text-white rounded-full px-3 py-1 ml-2 hover:bg-red-600 focus:outline-none"
              onClick={()=>dispatch(removeFromCart(eachItem.id,eachItem.price))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
