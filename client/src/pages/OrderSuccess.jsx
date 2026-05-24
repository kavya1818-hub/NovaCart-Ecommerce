import { Link }
from "react-router-dom"

const OrderSuccess = () => {

  return (

    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="bg-white shadow-2xl rounded-3xl p-12 text-center max-w-xl w-full">

        <div className="text-7xl mb-6">

          ✅

        </div>

        <h1 className="text-5xl font-bold mb-6 text-green-600">

          Order Placed!

        </h1>

        <p className="text-gray-600 text-lg mb-10">

          Your order has been placed successfully.

        </p>

        <Link
          to="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg transition"
        >

          Continue Shopping

        </Link>

      </div>

    </div>

  )

}

export default OrderSuccess