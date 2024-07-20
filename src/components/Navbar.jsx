import '../styles/components/Navbar.css';
const Navbar = () => {
  return (
    <div className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-purple-900 navbar">
      <nav className="flex w-full screen-max-width justify-between items-center">
        <div className="flex items-center">
          <a
            href="/"
            className="text-3xl font-bold text-white flex items-center"
          >
            <img
              src="./logo.png"
              alt=""
              width={125}
              height={125}
              className="mx-auto"
            />
          </a>
        </div>
        <div className="flex items-center">
          <button className="btn-gradient font-bold py-2 px-4 rounded">
            Resources
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
