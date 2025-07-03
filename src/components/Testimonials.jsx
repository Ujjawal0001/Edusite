const Testimonials = () => {
  const testimonials = [
    {
      name: 'Aarav Sharma',
      message: 'EduSite helped me clear my fundamentals in programming. The video lessons and quizzes are top-notch!',
    },
    {
      name: 'Priya Verma',
      message: 'The platform is very student-friendly. I loved the downloadable notes and the practical courses!',
    },
    {
      name: 'Rohan Mehta',
      message: 'Thanks to EduSite, I cracked my placement interview with confidence. Highly recommended!',
    },
  ]

  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-green-200 p-6 rounded-lg shadow hover:shadow-md transition text-left"
            >
              <p className="text-gray-700 italic">“{testimonial.message}”</p>
              <div className="mt-4 font-semibold text-green-700">— {testimonial.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
