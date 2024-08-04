import { useState } from "react";
import { motion } from "framer-motion";
import "../../assets/styles/pages/layouts/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      className="w-full py-3 lg:px-8 px-4 flex justify-between items-center bg-purple-900 navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex w-full screen-max-width justify-between items-center">
        <div className="flex items-center">
          <a
            href="/"
            className="text-3xl font-bold text-white flex items-center"
          >
            <img
              src="./titleIcon.png"
              alt="Logo"
              width={50}
              height={50}
              className="mx-auto"
            />
          </a>
        </div>
        <div className="flex items-center">
          <a className="btn-gradient font-bold py-2 px-4 rounded resources-btn" href="https://bit.ly/MicroMazeDelegateBooklet">
            Resources
          </a>
          <div className="lg:hidden">
            <button className="mobile-menu-button" onClick={handleMenuToggle}>
              ☰
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a className="btn-gradient font-bold py-2 px-4 rounded w-full" href="https://bit.ly/MicroMazeDelegateBooklet">
            Resources
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
