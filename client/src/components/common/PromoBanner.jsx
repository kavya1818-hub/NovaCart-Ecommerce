import { Link } from "react-router-dom"
const PromoBanner = () => {
  return (
    <section className="bg-blue-600 text-white py-24">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Big Summer Sale
        </h2>

        <p className="text-xl mb-10">
          Up to 50% OFF on premium products
        </p>
      <Link to="/products?deals=true">
       <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold">
        Shop Deals
       </button>
      </Link>
        
     
      </div>

    </section>
  )
}
export default PromoBanner