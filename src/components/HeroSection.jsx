const HeroSection = () => {
  return (
    <section className="bg-green-100 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to EduSite</h1>
        <p className="text-lg md:text-xl mb-6">
          Empowering students with quality education and helpful resources.
        </p>
        <a
          href="/courses"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
        >
          Explore Courses
        </a>
      </div>
    </section>
  )
}

export default HeroSection
