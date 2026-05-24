import { useState } from "react"

import { Link, useNavigate }
from "react-router-dom"

const Register = () => {

  const navigate = useNavigate()

  const [name, setName] =
    useState("")

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const handleRegister = async (e) => {

    e.preventDefault()

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

        body: JSON.stringify({
          name,
          email,
          password,
          role:
          email === "admin@gmail.com"
          ? "admin"
          : "user",
        }),
        }
      )

      const data =
        await response.json()

      if (response.ok) {

        // IMPORTANT
      localStorage.setItem(
        "novacartUser",
        JSON.stringify({
         name,
         email,
         password,
         role:
         email === "admin@gmail.com"
         ? "admin"
         : "user",
        })
      )

        alert(
          "Registration Successful"
        )

        navigate("/login")

      } else {

        alert(data.message)
      }

    } catch (error) {

      console.log(error)

      alert("Registration Failed")
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-100">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold mb-8 text-center">

          Register

        </h1>

        <form
          onSubmit={handleRegister}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border p-4 rounded-xl"
          />

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

          <button
            className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg hover:bg-blue-700 transition"
          >

            Register

          </button>

        </form>

        <p className="mt-6 text-center">

          Already have account?

          <Link
            to="/login"
            className="text-blue-600 ml-2"
          >

            Login

          </Link>

        </p>

      </div>

    </div>
  )
}

export default Register