import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="flex gap-[2%] no-scrollbar">
      <div className=" w-[7%] hidden md:hidden lg:block fixed left-[20px]">
        <Navbar />
      </div>
      <div className="w-[20%] hidden md:hidden lg:block fixed right-[20px]">
        <SideBar />
      </div>
      <div className="w-[69%] ml-[9%] overflow-y-auto flex justify-center items-center no-scrollbar">
        <Hero/>
      </div>
    </div>
  );
}

export default App;
