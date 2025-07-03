import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="min-h-screen bg-green-50 px-4 py-10">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-green-700 mb-4">About EduSite</h2>
        <p className="text-gray-700 text-lg mb-4">
          EduSite is a modern educational platform designed for students who want to learn at their own pace.
          Whether you're preparing for government exams, upskilling for IT jobs, or building your personal skills,
          we have courses tailored just for you.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          We believe in quality content, interactive learning, and real results. Join thousands of learners who
          are transforming their careers with EduSite.
        </p>
        <p className="text-gray-700 text-lg">
          This platform is built using the latest tech stack including React, Vite, Tailwind CSS, and more. Stay tuned
          as we add more features and improve your learning experience.
        </p>
      </motion.div>
    </section>
  )
}

export default About
