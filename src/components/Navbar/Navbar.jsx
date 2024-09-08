const Navbar = () => {
  return (
    <div>
      <div className="w-[104px] h-[811px] py-7 bg-black rounded-[28px] ml-[32px] mt-[13px] mb-[13px] flex-col justify-between items-center inline-flex">
        <div className="flex-col justify-start items-center gap-4 flex">
          <div className="w-12 justify-start items-center gap-2.5 inline-flex">
            <div className="w-[30px] h-[30px] relative rounded-lg border border-white">
              <div className="w-[14.25px] h-[0px] left-[7.87px] top-[9.30px] absolute border-2 border-white"></div>
              <div className="w-[14.25px] h-[0px] left-[7.87px] top-[15px] absolute border-2 border-white"></div>
              <div className="w-[14.25px] h-[0px] left-[7.87px] top-[20.70px] absolute border-2 border-white"></div>
            </div>
          </div>
          <div className="w-12 h-12 relative">
            <div className="w-12 h-12 left-0 top-0 absolute bg-[#f2c7ba] rounded-full"></div>
            <img
              className="w-12 h-12 left-0 top-0 absolute rounded-[36.22px]"
              src="https://via.placeholder.com/48x48"
            />
          </div>
          <div className="w-[90.02px] h-px opacity-30 bg-white"></div>
          <div className="h-56 flex-col justify-start items-start gap-1 flex">
            <div className="h-56 flex-col justify-center items-center flex">
              <div className="w-14 px-5 py-4 bg-white/5 rounded-xl border border-[#8039ec] justify-center items-center gap-4 inline-flex">
                <div className="w-[293px] h-14 opacity-50 bg-[#cc8a8a] blur-2xl"></div>
                <div className="w-6 h-6 relative shadow"></div>
              </div>
              <div className="w-14 px-5 py-4 rounded-xl border justify-center items-center gap-4 inline-flex">
                <div className="w-6 h-6 relative"></div>
              </div>
              <div className="w-14 px-5 py-4 rounded-xl border justify-center items-center gap-4 inline-flex">
                <div className="w-6 h-6 relative">
                  <img
                    className="w-2.5 h-[3.04px] left-[5.81px] top-[3px] absolute"
                    src="https://via.placeholder.com/10x3"
                  />
                  <img
                    className="w-[19.50px] h-[15.50px] left-[2.25px] top-[5.89px] absolute"
                    src="https://via.placeholder.com/19x15"
                  />
                  <div className="w-[1.50px] h-[1.50px] left-[15.75px] top-[12.89px] absolute bg-white/60 rounded-full"></div>
                </div>
              </div>
              <div className="w-14 px-5 py-4 rounded-xl border justify-center items-center gap-4 inline-flex">
                <div className="w-6 h-6 relative"></div>
              </div>
            </div>
          </div>
          <div className="w-[90.02px] h-px opacity-30 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
