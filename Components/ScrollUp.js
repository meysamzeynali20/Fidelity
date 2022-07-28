const ScrollUp = () => {

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return <div className="fixed right-6 bottom-6 z-10">
    <button
      type="button"
      className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] text-xs lg:text-base bg-[#AAB501] hover:bg-[#757c0f] rounded-[50%] text-white"
      onClick={scrollUp}
    >
      <span className="w-full text-center">&uarr;</span>
      <p className="w-full text-center">بالا</p>
    </button>
  </div>
};

export default ScrollUp;
