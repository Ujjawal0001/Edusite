const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">What You'll Find Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Video Lessons</h3>
            <p>Learn at your own pace with high-quality video content.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Downloadable Notes</h3>
            <p>Get notes and materials to study anytime, anywhere.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Interactive Quizzes</h3>
            <p>Test your knowledge and track your progress easily.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
