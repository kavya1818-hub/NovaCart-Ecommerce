import { useSelector, useDispatch } from "react-redux"

import { clearCart } from "../redux/slices/cartSlice"

import { useNavigate } from "react-router-dom"

const Checkout = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const cartItems = useSelector(
    state => state.cart.cartItems
  )

  const totalPrice = cartItems.reduce(

    (total, item) =>

      total +
      item.price * item.quantity,

    0

  )

  const handlePlaceOrder = () => {
    dispatch(clearCart())
    navigate("/order-success")
  }
  return (

    <div className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-12">

        Checkout

      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-white p-8 rounded-3xl shadow-md">

          <h2 className="text-3xl font-bold mb-8">

            Shipping Details

          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="Address"
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="City"
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="Postal Code"
              className="w-full border p-4 rounded-xl"
            />

          </form>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-md h-fit">

          <h2 className="text-3xl font-bold mb-8">

            Order Summary

          </h2>

          <div className="space-y-4 mb-8">

            {cartItems.map((item) => (

              <div
                key={item._id}
                className="flex justify-between"
              >

                <span>

                  {item.name} x {item.quantity}

                </span>

                <span>

                  ₹{item.price * item.quantity}

                </span>

              </div>

            ))}

          </div>

          <div className="flex justify-between text-2xl font-bold mb-8">

            <span>Total</span>

            <span>

              ₹{totalPrice.toFixed(2)}

            </span>

          </div>

          <button

            onClick={handlePlaceOrder}

            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-xl transition"
          >

            Place Order

          </button>

        </div>

      </div>

    </div>

  )

}

export default Checkout