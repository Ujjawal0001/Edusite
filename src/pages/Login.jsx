import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [shake, setShake] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
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

    console.log('Logging in with:', email, password)
  }

  const triggerShake = () => {
    setShake(true)
    setTimeout(() => setShake(false), 600)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <AnimatePresence>
        <motion.div
          key="login-form"
          className="bg-white shadow-md rounded-lg p-8 max-w-md w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            x: shake ? [0, -10, 10, -10, 10, 0] : 0,
          }}
          transition={{ duration: shake ? 0.5 : 0.6 }}
        >
          <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Login to EduSite</h2>
          {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
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
              Login
            </motion.button>
          </form>

          <p className="text-sm mt-4 text-center text-gray-600">
            Don’t have an account? <a href="/signup" className="text-green-600 hover:underline">Signup</a>
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default Login
