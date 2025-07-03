const PopularCourses = () => {
  const courses = [
    {
      title: 'Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript, and React from scratch.',
    },
    {
      title: 'Python for Beginners',
      description: 'Master Python programming with hands-on projects.',
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Crack coding interviews with DSA concepts.',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Popular Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-200 p-6 rounded-lg shadow hover:shadow-md transition text-left"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-700">{course.description}</p>
              <a
                href="/courses"
                className="inline-block mt-4 text-green-600 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularCourses
