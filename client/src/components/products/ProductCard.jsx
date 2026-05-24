import { useDispatch, useSelector } from "react-redux"

import { addToCart } from "../../redux/slices/cartSlice"

import { Link, useNavigate } from "react-router-dom"

const ProductCard = ({ product }) => {

  const navigate = useNavigate()

  const user = useSelector(
    state => state.auth.user
  )

  const dispatch = useDispatch()

  const handleAddToCart = () => {

    if (!user) {

      navigate("/login")

      return

    }

    dispatch(addToCart(product))

  }

  return (

    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group">

      <Link to={`/products/${product._id}`}>

        <div className="overflow-hidden">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
          />

        </div>

        <div className="p-6">

          <h2 className="text-2xl font-semibold mb-3">

            {product.name}

          </h2>

          <p className="text-blue-600 text-3xl font-bold mb-6">

            ₹{product.price}

          </p>

        </div>

      </Link>

      <div className="px-6 pb-6">

        <button
          onClick={handleAddToCart}
          className="w-full bg-black hover:bg-blue-600 text-white py-4 rounded-2xl transition"
        >

          Add To Cart

        </button>

      </div>

    </div>

  )

}

export default ProductCard