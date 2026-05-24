import { useState } from "react"

import axios from "axios"

const AdminAddProduct = () => {

  const [name, setName] =
    useState("")

  const [price, setPrice] =
    useState("")

  const [image, setImage] =
    useState("")

  const [category, setCategory] =
    useState("")

  const [description, setDescription] =
    useState("")

  const [countInStock, setCountInStock] =
    useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await axios.post(

        "http://localhost:5000/api/products",

        {

          name,
          price,
          image,
          category,
          description,
          countInStock,

        }

      )

      alert(
        "Product Added Successfully"
      )

      setName("")
      setPrice("")
      setImage("")
      setCategory("")
      setDescription("")
      setCountInStock("")

    }

    catch (error) {

      console.log(error)

      alert("Failed to add product")

    }

  }

  return (

    <div className="max-w-3xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-12 text-center">

        Admin Add Product

      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-3xl shadow-md space-y-6"
      >

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full border p-4 rounded-xl"
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
          className="w-full border p-4 rounded-xl"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) =>
            setImage(e.target.value)
          }
          className="w-full border p-4 rounded-xl"
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="w-full border p-4 rounded-xl"
        >

          <option value="">
            Select Category
          </option>

          <option value="Accessories">
            Accessories
          </option>

          <option value="Audio">
            Audio
          </option>

          <option value="Gaming">
            Gaming
          </option>

          <option value="Smart Watches">
            Smart Watches
          </option>

          <option value="Laptops">
            Laptops
          </option>

        </select>

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full border p-4 rounded-xl h-32"
        />

        <input
          type="number"
          placeholder="Stock Quantity"
          value={countInStock}
          onChange={(e) =>
            setCountInStock(e.target.value)
          }
          className="w-full border p-4 rounded-xl"
        />

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-xl"
        >

          Add Product

        </button>

      </form>

    </div>

  )

}

export default AdminAddProduct