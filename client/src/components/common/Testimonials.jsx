const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <h2 className="text-5xl font-bold text-center mb-16">
        What Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {[1,2,3].map((item) => (
          <div
            key={item}
            className="bg-white p-10 rounded-3xl shadow-lg"
          >

            <p className="text-gray-600 mb-6 leading-8">
              Amazing quality products and
              super fast delivery. Highly recommended.
            </p>

            <h3 className="text-xl font-bold">
              Customer {item}
            </h3>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Testimonials