import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Reuse the same mock data from Courses.jsx
const coursesData = [
  {
    id: 1,
    title: 'UPSC Preparation',
    category: 'Government',
    description: 'Comprehensive guide to clear UPSC with current affairs, history, polity, and more.',
    content: 'Includes daily current affairs, mock tests, strategy sessions, and detailed analysis of previous year questions.',
  },
  {
    id: 2,
    title: 'SSC CGL Masterclass',
    category: 'Government',
    description: 'Master Quant, Reasoning & GK with this in-depth SSC course.',
    content: 'Includes live practice sessions, PDFs, and mentorship from toppers.',
  },
  {
    id: 3,
    title: 'Full Stack Web Dev',
    category: 'IT',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js, MongoDB — all in one course.',
    content: 'Build real-world projects, get portfolio-ready, and ace technical interviews.',
  },
  {
    id: 4,
    title: 'Java + DSA Bootcamp',
    category: 'IT',
    description: 'Ace coding interviews with Java, OOPs, and data structures.',
    content: 'Live contests, Leetcode-style problems, resume projects, and mock interviews.',
  },
  {
    id: 5,
    title: 'Communication Skills',
    category: 'Skill',
    description: 'Improve English speaking, writing, and presentation skills.',
    content: 'Interactive tasks, recordings, and weekly feedback sessions.',
  },
  {
    id: 6,
    title: 'Digital Marketing',
    category: 'Skill',
    description: 'Learn SEO, ads, social media, and email marketing techniques.',
    content: 'Hands-on campaigns, analytics tracking, and job-ready certificates.',
  },
]

const CourseDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [course, setCourse] = useState(null)

  useEffect(() => {
    const selected = coursesData.find((c) => c.id === parseInt(id))
    if (selected) setCourse(selected)
    else navigate('/courses') // Redirect if not found
  }, [id, navigate])

  if (!course) return null

  return (
    <section className="min-h-screen bg-green-50 px-4 py-10">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-green-700 mb-2">{course.title}</h2>
        <p className="text-gray-600 italic mb-4">{course.category}</p>
        <p className="text-gray-700 mb-6">{course.content}</p>

        <button
          onClick={() => navigate(-1)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          ← Back to Courses
        </button>
      </motion.div>
    </section>
  )
}

export default CourseDetails
