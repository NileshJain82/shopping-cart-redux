import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {addInCart} from '../redux/store'

 function Card() {
 
    const dispatch = useDispatch()
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/products`)
        .then((res)=> res.json())
        .then((data)=> {
           setProducts(data.products)
        })
    },[])
  
  return (
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 bg-gray-700">
        
      {products.map((product) => (
        <div key={product.id} className="border-2 border-gray-900 bg-orange-100 rounded-lg shadow-md m-2 mt-10 p-3">
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className=" w-80 h-60"
            />
          </div>

          <h2 className="text-lg text-red-500 font-semibold mt-5">{product.title}</h2>
          <p className="text-gray-600 font-bold mt-2">${product.price}</p>
          <button
            onClick={() => dispatch(addInCart(product.price,product.title,product.id,product.thumbnail,product.description))}
            className="bg-blue-500 text-white rounded-full px-4 py-2 mt-4 hover:bg-blue-600 focus:outline-none"
          >
            + Add to Cart
          </button>
          </div>
      ))}
    </div>

  )
};

export default Card