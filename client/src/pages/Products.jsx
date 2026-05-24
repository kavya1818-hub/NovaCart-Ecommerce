import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"

import ProductCard
from "../components/products/ProductCard"

const Products = () => {

  const [products, setProducts] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  const [search, setSearch] =
    useState("")
  const location = useLocation()
  const queryParams =
  new URLSearchParams(
    location.search
  )
  const categoryTitles = {
  Wearables: "Smart Watches",
  Computers: "Laptops",
  Audio: "Audio Devices",
  Gaming: "Gaming Products",
  Accessories: "Accessories",
}
const selectedCategory =
  queryParams.get("category")
const deals =
  queryParams.get("deals")
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } =
          await axios.get(
            "http://localhost:5000/api/products"
          )
        setProducts(data)
      }
      catch (error) {
        console.log(error)
      }
      finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

const filteredProducts =
  products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

    const matchesCategory =
      selectedCategory

        ? product.category ===
          selectedCategory

        : true

    const matchesDeals =
      deals

        ? product.price < 5000

        : true

    return (
      matchesSearch &&
      matchesCategory &&
      matchesDeals
    )

  })

  if (loading) {

    return (

      <h1 className="text-3xl text-center mt-20">

        Loading Products...

      </h1>

    )

  }

  return (

    <div className="max-w-7xl mx-auto px-6 py-20">

      <div className="flex justify-between items-center mb-14">
       <h1 className="text-5xl font-bold">
        {selectedCategory
        ? `${categoryTitles[selectedCategory]}`
        : deals
        ? "Shop Deals"
        : "All Products"}
        </h1>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border px-5 py-3 rounded-xl w-72"
        />

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {filteredProducts.map((product) => (

          <ProductCard

            key={product._id}

            product={product}

          />

        ))}

      </div>

    </div>

  )

}

export default Products