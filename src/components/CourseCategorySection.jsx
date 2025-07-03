const CourseCategorySection = ({ title, courses }) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-green-700">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white border border-green-200 p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">{course.title}</h3>
            <p className="text-gray-700 mb-2">{course.description}</p>
            <span className="inline-block text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
              {course.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseCategorySection
