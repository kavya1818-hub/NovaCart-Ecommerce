import { useEffect, useState } from "react"

import axios from "axios"

import { useParams } from "react-router-dom"

import { useDispatch } from "react-redux"

import { addToCart }
from "../redux/slices/cartSlice"

const ProductDetails = () => {

  const { id } = useParams()

  const dispatch = useDispatch()

  const [product, setProduct] =
    useState(null)

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const { data } =
          await axios.get(
            `http://localhost:5000/api/products`
          )

        const selectedProduct =
          data.find(
            (item) => item._id === id
          )

        setProduct(selectedProduct)

      }

      catch (error) {

        console.log(error)

      }

    }

    fetchProduct()

  }, [id])

  if (!product) {

    return (

      <h1 className="text-3xl text-center mt-20">

        Loading Product...

      </h1>

    )

  }

  return (

    <div className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-2 gap-14 items-center">

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-3xl shadow-lg"
        />

        <div>

          <h1 className="text-5xl font-bold mb-6">

            {product.name}

          </h1>

          <p className="text-gray-600 text-lg mb-8">

            {product.description}

          </p>
          <div className="space-y-3 mb-8">
            <p className="text-lg">
                <span className="font-bold">
                    Category:
                </span>
                {" "}
                {product.category}
            </p>
            <p className="text-lg">
                <span className="font-bold">
                    Stock:
                </span>
                {" "}
                {product.countInStock}
            </p>
            <p className="text-lg">
                <span className="font-bold">
                    Rating:
                    </span>
                    {" "}⭐ 4.5
             </p>
  <p className="text-lg text-green-600 font-semibold">
    Free Delivery Available
  </p>
</div>

          <p className="text-blue-600 text-4xl font-bold mb-10">

            ₹{product.price}

          </p>

          <button
            onClick={() =>
              dispatch(addToCart(product))
            }
            className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-xl"
          >

            Add To Cart

          </button>

        </div>

      </div>

    </div>

  )

}

export default ProductDetails