import { Link } from "react-router-dom"

const categories = [
  "Accessories",
  "Audio",
  "Gaming",
  "Wearables",
  "Computers",
]

const Categories = () => {

  return (
  <section
  id="categories"
  className="max-w-7xl mx-auto px-6 py-20"
  >
      <h2 className="text-4xl font-bold mb-12 text-center">

        Categories

      </h2>

      <div className="grid md:grid-cols-5 gap-6">

        {categories.map((category, index) => (

          <Link
            key={index}
            to={`/products?category=${category}`}
          >

            <div className="bg-white shadow-md rounded-2xl p-10 text-center text-xl font-semibold hover:bg-blue-600 hover:text-white transition cursor-pointer">

              {category}

            </div>

          </Link>

        ))}

      </div>

    </section>

  )

}

export default Categories