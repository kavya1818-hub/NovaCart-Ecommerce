import { useState } from "react"

import axios from "axios"

import { useDispatch } from "react-redux"

import { useNavigate } from "react-router-dom"

import { login } from "../redux/slices/authSlice"
import { loadCart }
from "../redux/slices/cartSlice"
const Login = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [error, setError] =
    useState("")

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      const { data } =
        await axios.post(

          "http://localhost:5000/api/auth/login",

          {

            email,

            password,

          }

        )

      dispatch(login(data.user))
      dispatch(loadCart())
      /*localStorage.setItem(
        "userInfo",
        JSON.stringify(data.user)

      )*/
      navigate("/")

    }

    catch (error) {

      setError(

        error.response?.data?.message ||

        "Login failed"

      )

    }

  }

  return (

    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold mb-8 text-center">

          Login

        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border p-4 rounded-xl"
          />

          {

            error && (

              <p className="text-red-500 text-center">

                {error}

              </p>

            )

          }

          <button
            className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg"
          >

            Login

          </button>

        </form>

      </div>

    </div>

  )

}

export default Login