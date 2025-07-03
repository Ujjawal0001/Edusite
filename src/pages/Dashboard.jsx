import { useState } from 'react'
import { motion } from 'framer-motion'
import { useUser } from '../context/UserContext'
 import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const [user, setUser] = useState({
    name: 'Ujjawal',
    email: 'ujjawal@example.com',
  })

  const [isEditing, setIsEditing] = useState(false)
  const [tempName, setTempName] = useState(user.name)
  const [tempEmail, setTempEmail] = useState(user.email)

  const { enrolledCourses } = useUser()

 

// Inside your component
const navigate = useNavigate()

const handleLogout = () => {
  // Clear user state or session storage if used
  alert('Logged out successfully!')
  navigate('/login')
}


  const saveChanges = () => {
    setUser({ ...user, name: tempName, email: tempEmail })
    setIsEditing(false)
  }

  return (
    <section className="min-h-screen bg-green-50 px-4 py-10">
      <motion.div
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-green-700">My Dashboard</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Profile Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">My Profile</h3>

          {isEditing ? (
            <div className="space-y-3">
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="email"
                value={tempEmail}
                onChange={(e) => setTempEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
              <div className="space-x-2">
                <button
                  onClick={saveChanges}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="border px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <button
                onClick={() => setIsEditing(true)}
                className="mt-2 text-green-600 underline"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>

        {/* Enrolled Courses Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-green-600">Enrolled Courses</h3>
          {enrolledCourses.length > 0 ? (
            <ul className="list-disc list-inside text-gray-700">
              {enrolledCourses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">You haven't enrolled in any courses yet.</p>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default Dashboard
