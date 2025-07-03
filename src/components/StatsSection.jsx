const StatsSection = () => {
  const stats = [
    { label: 'Students Enrolled', value: '12,000+' },
    { label: 'Courses Available', value: '150+' },
    { label: 'Expert Instructors', value: '40+' },
    { label: 'Certificates Issued', value: '9,500+' },
  ]

  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 hover:shadow-md transition"
            >
              <div className="text-3xl font-bold text-green-600">{stat.value}</div>
              <div className="mt-2 text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
