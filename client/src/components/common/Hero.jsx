import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-blue-600 font-semibold mb-4">
            BEST ONLINE STORE
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">

            Discover
            <span className="text-blue-600"> Premium </span>
            Tech Products

          </h1>

          <p className="text-gray-600 text-lg mb-10 leading-8">

            Shop high-quality gadgets,
            electronics, and accessories
            with modern style and unbeatable prices.

          </p>

          <div className="flex gap-4">
            <Link to="/products">
            <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl">
              Shop Now
            </button>
            </Link>
            <a 
            href="#categories"
            className="border border-black px-8 py-4 rounded-2xl hover:bg-black hover:text-white transition"
            >
              Explore
            </a>
          </div>
        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="hero"
            className="rounded-3xl shadow-2xl w-full"
          />

        </div>

      </div>

    </section>
  )
}

export default Hero