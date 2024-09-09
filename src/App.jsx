import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="lg:fixed lg:top-0 lg:left-0 w-full lg:w-auto lg:inline-flex sm:hidden md:hidden">
        <Navbar />
      </div>
      <div className="lg:fixed lg:top-0 lg:right-0 w-full lg:w-auto lg:inline-flex sm:hidden md:hidden">
        <SideBar />
      </div>
      <div className="flex justify-center lg:ml-[200px] md:">
        <Hero />
      </div>
    </div>
  );
}

export default App;
