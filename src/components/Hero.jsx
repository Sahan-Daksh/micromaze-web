const Hero = () => {
  return (
    <>
      <div
        className="relative bg-blue-800 h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('./hero_image.png')" }}
      >
        <div className="flex flex-col items-center pt-[20%] pl-[2%]">
          <h1
            className="text-[15rem] font-extrabold text-white"
            style={{ fontFamily: "'Space Grotesk', 'Sora', 'Source Code Pro'" }}
          >
            MicroMaze
          </h1>
        </div>
        <img
          src="./hero_image_without_bg.png"
          alt="Overlay"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Hero;
