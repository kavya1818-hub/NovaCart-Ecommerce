import { useEffect, useState } from "react"

import axios from "axios"

import Hero from "../components/common/Hero"
import Categories from "../components/common/Categories"
import PromoBanner from "../components/common/PromoBanner"
import Testimonials from "../components/common/Testimonials"
import Newsletter from "../components/common/Newsletter"
import ProductCard from "../components/products/ProductCard"
import { Link } from "react-router-dom"
const Home = () => {

  const [products, setProducts] =
    useState([])

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

    }

    fetchProducts()

  }, [])

  return (

    <div>

      <Hero />

      <Categories />

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="flex justify-between items-center mb-14">

          <h2 className="text-5xl font-bold">

            Featured Products

          </h2>

          <Link to="/products"
          className="text-blue-600 font-semibold">
            View All
          </Link>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {products.slice(0, 4).map((product) => (

            <ProductCard

              key={product._id}

              product={product}

            />

          ))}

        </div>

      </section>

      <PromoBanner />

      <Testimonials />

      <Newsletter />

    </div>

  )

}

export default Home