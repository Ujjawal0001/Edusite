import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [shake, setShake] = useState(false)

  const handleSignup = (e) => {
    e.preventDefault()
    setError('')

    if (!name || !email || !password) {
      setError('All fields are required')
      triggerShake()
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Invalid email format')
      triggerShake()
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      triggerShake()
      return
    }

    console.log('Signing up with:', name, email, password)
  }

  const triggerShake = () => {
    setShake(true)
    setTimeout(() => setShake(false), 600)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <AnimatePresence>
        <motion.div
          key="signup-form"
          className="bg-white shadow-md rounded-lg p-8 max-w-md w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            x: shake ? [0, -10, 10, -10, 10, 0] : 0,
          }}
          transition={{ duration: shake ? 0.5 : 0.6 }}
        >
          <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Create an Account</h2>
          {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Signup
            </motion.button>
          </form>

          <p className="text-sm mt-4 text-center text-gray-600">
            Already have an account? <a href="/login" className="text-green-600 hover:underline">Login</a>
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default Signup
