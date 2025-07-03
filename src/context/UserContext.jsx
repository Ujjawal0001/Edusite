import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([])

  const enrollCourse = (courseTitle) => {
    if (!enrolledCourses.includes(courseTitle)) {
      setEnrolledCourses((prev) => [...prev, courseTitle])
    }
  }

  return (
    <UserContext.Provider value={{ enrolledCourses, enrollCourse }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
