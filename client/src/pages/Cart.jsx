import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/slices/cartSlice"

import {
  useSelector,
  useDispatch,
} from "react-redux"

import { useNavigate } from "react-router-dom"

const Cart = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const cartItems = useSelector(
    state => state.cart.cartItems
  )

  const totalPrice = cartItems.reduce(

    (total, item) =>

      total +
      Number(item.price) * item.quantity,

    0

  )

  return (

    <div className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-14">

        Shopping Cart

      </h1>

      {cartItems.length === 0 ? (

        <p className="text-2xl">

          Your cart is empty.

        </p>

      ) : (

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-6">

            {cartItems.map((item) => (

              <div
                key={item._id}
                className="bg-white p-6 rounded-3xl shadow-md flex items-center gap-6"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-2xl"
                />

                <div className="flex-1">

                  <h2 className="text-2xl font-bold mb-2">

                    {item.name}

                  </h2>

                  <p className="text-blue-600 text-xl font-semibold">

                    ₹{item.price}

                  </p>

                  <div className="flex items-center gap-4 mt-4">

                    <button
                      onClick={() =>
                        dispatch(
                          decreaseQuantity(item._id)
                        )
                      }
                      className="bg-gray-200 px-4 py-2 rounded-lg"
                    >
                      -
                    </button>

                    <span className="text-xl font-bold">

                      {item.quantity}

                    </span>

                    <button
                      onClick={() =>
                        dispatch(
                          increaseQuantity(item._id)
                        )
                      }
                      className="bg-gray-200 px-4 py-2 rounded-lg"
                    >
                      +
                    </button>

                  </div>

                </div>

                <button
                  onClick={() =>
                    dispatch(
                      removeFromCart(item._id)
                    )
                  }
                  className="bg-red-500 text-white px-5 py-3 rounded-xl hover:bg-red-600 transition"
                >

                  Remove

                </button>

              </div>

            ))}

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md h-fit">

            <h2 className="text-3xl font-bold mb-8">

              Order Summary

            </h2>

            <div className="flex justify-between mb-6 text-xl">

              <span>Total</span>

              <span className="font-bold">

                ₹{totalPrice.toFixed(2)}

              </span>

            </div>

            <button
              onClick={() =>
                navigate("/checkout")
              }
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-xl transition"
            >

              Checkout

            </button>

          </div>

        </div>

      )}

    </div>

  )

}

export default Cart