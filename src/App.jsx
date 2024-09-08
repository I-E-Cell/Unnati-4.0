import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="flex flex-row no-scrollbar">
      <div className="hidden md:hidden lg:block fixed">
        <Navbar />
      </div>
      <div className="hidden md:hidden lg:block fixed right-0">
        <SideBar />
      </div>
      <div className="overflow-y-auto flex justify-center ml-[230px] no-scrollbar">
        <Hero/>
      </div>
    </div>
  );
}

export default App;
