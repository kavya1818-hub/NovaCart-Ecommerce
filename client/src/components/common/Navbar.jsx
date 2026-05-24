import { Link, useNavigate }
from "react-router-dom"

import { FaShoppingCart }
from "react-icons/fa"

import {
  useSelector,
  useDispatch,
} from "react-redux"

import { logout }
from "../../redux/slices/authSlice"

import { clearCart }
from "../../redux/slices/cartSlice"

const Navbar = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const cartItems = useSelector(
    state => state.cart.cartItems
  )

  const user = useSelector(
    state => state.auth.user
  )

  const handleLogout = () => {

    dispatch(logout())

    navigate("/login")

  }

  return (

    <nav className="bg-white shadow-md sticky top-0 z-50 border-b">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <Link
          to="/"
          className="text-4xl font-bold text-blue-600"
        >
          NovaCart
        </Link>

        <div className="flex items-center gap-8 text-lg">

          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>

          {user?.email === "admin@gmail.com" && (

            <Link to="/admin/add-product">

              Admin

            </Link>

          )}

          <Link
            to="/cart"
            className="relative"
          >

            <FaShoppingCart size={24} />

            <span className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">

              {cartItems.length}

            </span>

          </Link>

          {!user ? (

            <div className="flex gap-4">

              <Link
                to="/login"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >

                Login

              </Link>

              <Link
                to="/register"
                className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg"
              >

                Register

              </Link>

            </div>

          ) : (

            <div className="flex items-center gap-4">

              <p className="font-semibold">

                {user.email}

              </p>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2 rounded-lg"
              >

                Logout

              </button>

            </div>

          )}

        </div>

      </div>

    </nav>

  )

}

export default Navbar