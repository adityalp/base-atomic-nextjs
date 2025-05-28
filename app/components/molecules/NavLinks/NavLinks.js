import React, { useState } from 'react'

export default function NavLinks({ navLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={toggleMenu}
        className="md:hidden block text-gray-700 focus:outline-none"
      >
        ☰
      </button>
      {/* Desktop menu */}
      <div className="hidden md:flex space-x-4">
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={className}
          >
            {label}
          </Link>
        ))}
      </div>
      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={className}
              onClick={() => setIsOpen(false)} // close on click
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
