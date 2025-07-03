import { useState } from 'react'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-green-100 py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
        <p className="mb-6 text-gray-700">Subscribe to our newsletter to get the latest courses and resources delivered to your inbox.</p>

        {submitted ? (
          <div className="text-green-700 font-semibold">
            ✅ Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 w-full sm:w-auto rounded border border-green-300 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default NewsletterSignup
