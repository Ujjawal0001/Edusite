const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} EduSite. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-green-300 hover:underline">Privacy Policy</a>
          <a href="#" className="hover:text-green-300 hover:underline">Terms of Service</a>
          <a href="#" className="hover:text-green-300 hover:underline">Help</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
