import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Home from "../pages/Home"
import Products from "../pages/Products"
import Cart from "../pages/Cart"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Checkout from "../pages/Checkout"
import ProductDetails from "../pages/ProductDetails"
import Navbar from "../components/common/Navbar"
import AdminAddProduct from "../pages/AdminAddProduct"
import OrderSuccess
from "../pages/OrderSuccess"
import Footer
from "../components/common/Footer"
const AppRoutes = () => {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />
        <Route
        path="/products/:id"
        element={<ProductDetails />}
        />
        <Route
        path="/admin/add-product"
        element={<AdminAddProduct />}
        />
        <Route
        path="/order-success"
        element={<OrderSuccess />}
        />

      </Routes>
      <Footer />

    </BrowserRouter>

  )

}

export default AppRoutes