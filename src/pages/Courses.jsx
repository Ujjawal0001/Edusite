import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const coursesData = [
  {
    id: 1,
    title: 'UPSC Preparation',
    category: 'Government',
    description: 'Comprehensive guide to clear UPSC with current affairs, history, polity, and more.',
  },
  {
    id: 2,
    title: 'SSC CGL Masterclass',
    category: 'Government',
    description: 'Master Quant, Reasoning & GK with this in-depth SSC course.',
  },
  {
    id: 3,
    title: 'Full Stack Web Dev',
    category: 'IT',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js, MongoDB — all in one course.',
  },
  {
    id: 4,
    title: 'Java + DSA Bootcamp',
    category: 'IT',
    description: 'Ace coding interviews with Java, OOPs, and data structures.',
  },
  {
    id: 5,
    title: 'Communication Skills',
    category: 'Skill',
    description: 'Improve English speaking, writing, and presentation skills.',
  },
  {
    id: 6,
    title: 'Digital Marketing',
    category: 'Skill',
    description: 'Learn SEO, ads, social media, and email marketing techniques.',
  },
]

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [search, setSearch] = useState('')
  const { enrolledCourses, enrollCourse } = useUser()

  const categories = ['All', 'Government', 'IT', 'Skill']

  const filteredCourses = coursesData
    .filter(course => selectedCategory === 'All' || course.category === selectedCategory)
    .filter(course => course.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <section className="min-h-screen bg-green-50 px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-8">Explore Our Courses</h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === cat
                  ? 'bg-green-600 text-white border-green-600'
                  : 'text-green-700 border-green-400 hover:bg-green-100'
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => {
            const isEnrolled = enrolledCourses.includes(course.title)

            return (
              <motion.div
                key={course.id}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold text-green-700 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="flex gap-2">
                  <Link
                    to={`/courses/${course.id}`}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition text-sm"
                  >
                    View Details
                  </Link>

                  <button
                    disabled={isEnrolled}
                    onClick={() => enrollCourse(course.title)}
                    className={`px-4 py-2 rounded text-sm ${
                      isEnrolled
                        ? 'bg-green-300 text-white cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    } transition`}
                  >
                    {isEnrolled ? 'Enrolled' : 'Enroll Now'}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Courses
