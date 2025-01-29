import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-10" />
        </Link>
        {/* Hamburger menu icon */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/crypto-taxes" className="text-secondary-foreground font-semibold">
            Crypto Taxes
          </Link>
          <Link to="/free-tools" className="text-secondary-foreground font-semibold">
            Free Tools
          </Link>
          <Link to="/resource-center" className="text-secondary-foreground font-semibold">
            Resource Center
          </Link>
          <Link
            to="/get-started"
            className="bg-primary text-white px-6 py-2 rounded-lg font-semibold"
          >
            Get Started
          </Link>
        </nav>
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-start px-4 py-2 gap-4">
            <Link
              to="/crypto-taxes"
              className="text-secondary-foreground font-semibold"
              onClick={toggleMenu}
            >
              Crypto Taxes
            </Link>
            <Link
              to="/free-tools"
              className="text-secondary-foreground font-semibold"
              onClick={toggleMenu}
            >
              Free Tools
            </Link>
            <Link
              to="/resource-center"
              className="text-secondary-foreground font-semibold"
              onClick={toggleMenu}
            >
              Resource Center
            </Link>
            <Link
              to="/get-started"
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
