const Navbar = () => {
  return (
    <div className="w-full py-5 sm:px-10 px-5 flex justify-between items-center lg:bg-n-8/90 lg:backdrop-blur-sm bg-n-8/90 backdrop-blur-sm">
      <nav className="flex w-full screen-max-width justify-between">
        <div>
          <a href="/" className="text-3xl font-bold text-white">
            MicroMAze
          </a>
        </div>
        <div>
          <a href="/" className="text-3xl font-bold text-white">
            Collection
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
