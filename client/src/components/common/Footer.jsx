import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"

const Footer = () => {

  return (

    <footer className="bg-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        <div>

          <h1 className="text-4xl font-bold text-blue-500 mb-4">

            NovaCart

          </h1>

          <p className="text-gray-400 leading-7">

            Premium ecommerce platform for modern tech products.

          </p>

        </div>

        <div>

          <h2 className="text-2xl font-semibold mb-4">

            Quick Links

          </h2>

          <div className="flex flex-col gap-3 text-gray-400">

            <a href="/">Home</a>

            <a href="/products">
              Products
            </a>

            <a href="/cart">
              Cart
            </a>

          </div>

        </div>

        <div>

          <h2 className="text-2xl font-semibold mb-4">

            Follow Us

          </h2>

          <div className="flex gap-5 text-3xl text-gray-400">

            <FaFacebook className="hover:text-white transition cursor-pointer" />

            <FaInstagram className="hover:text-white transition cursor-pointer" />

            <FaTwitter className="hover:text-white transition cursor-pointer" />

          </div>

        </div>

      </div>

      <div className="border-t border-gray-800 py-6 text-center text-gray-500">

        © 2026 NovaCart. All Rights Reserved.

      </div>

    </footer>

  )

}

export default Footer