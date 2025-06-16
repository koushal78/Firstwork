import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '@/Pages/Login/Login'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('user-role');
    setRole(storedRole);
  }, []);
  


  return (
    <nav className="bg-black text-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <p className="text-2xl font-semibold">FirstWork</p>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menu Items */}
        <ul
          className={`md:flex gap-8 items-center font-semibold text-md ${
            isOpen ? 'block' : 'hidden'
          } absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent px-4 md:px-0 z-50`}
        >
          <li className="py-2 md:py-0">
            <Link to="/">Home</Link>
          </li>

          {
            role == "Employer" && ( <li className="py-2 md:py-0">
            <Link to="/createjob">Create Job</Link>
          </li>)
          }
         
          <li className="py-2 md:py-0">
            <Link to="/jobs">Jobs</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/build-resume">Build Resume</Link>
          </li>
          <li className="py-2 md:py-0">Interview</li>
          <li className="py-2 md:py-0">
            <Login />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
