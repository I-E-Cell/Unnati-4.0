import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
// import Footer from "./components/footer/footer"; // Changed to uppercase

function App() {
  return (
    <div className="flex gap-[2%] no-scrollbar">
      <div className=" w-[7%] hidden lg:block fixed left-[20px]">
        <Navbar />
      </div>
      <div className="w-[20%] hidden  lg:block fixed right-[20px]">
        <SideBar />
      </div>
      <div className="lg:w-[69%] fixed w-[98vw] rounded-3xl mx-[10px] my-[13px] lg:ml-[9%] overflow-x-hidden overflow-y-scroll flex justify-center items-center no-scrollbar">
        <Hero/>
      </div>
    </div>
  );
}

export default App;
