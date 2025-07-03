import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!name || !email || !message) {
      setError('Please fill in all fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Invalid email format.')
      return
    }

    // TODO: Send to backend or Appwrite later
    console.log('Contact form submitted:', { name, email, message })

    setSuccess('Message sent successfully!')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-10">
      <motion.div
        className="bg-white rounded-lg shadow-md p-8 max-w-xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Contact Us</h2>

        {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-4 text-center">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}

export default Contact
