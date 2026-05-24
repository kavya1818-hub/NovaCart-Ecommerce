import { useState } from "react"

const Newsletter = () => {

  const [email, setEmail] =
    useState("")

  const handleSubscribe = () => {

    if (!email) {

      alert("Enter email")

      return

    }

    alert(
      "Subscribed Successfully"
    )

    setEmail("")

  }

  return (

    <section className="bg-black text-white py-24">

      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold mb-6">

          Subscribe Newsletter

        </h2>

        <p className="text-gray-300 mb-10">

          Get latest product updates and offers

        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="px-6 py-4 rounded-2xl text-black w-full sm:w-96"
          />

          <button
            onClick={handleSubscribe}
            className="bg-blue-600 px-8 py-4 rounded-2xl"
          >

            Subscribe

          </button>

        </div>

      </div>

    </section>

  )

}

export default Newsletter