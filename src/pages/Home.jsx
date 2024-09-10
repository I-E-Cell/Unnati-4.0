import Hero from '../components/Hero/Hero'
import SideBar from '../components/SideBar/SideBar'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
    return (
        <div className="flex gap-[2%]">
        {/* Navbar */}
        <div className="lg:w-[7%] hidden lg:block fixed left-[20px]">
            <Navbar />
        </div>
        
        {/* Sidebar */}
        <div className="lg:w-[20%] hidden lg:block fixed right-[20px]">
            <SideBar />
        </div>
        
        {/* Hero Section */}
        <div className="w-full lg:w-[69%] lg:ml-[9%] lg:my-[13px] fixed rounded-3xl overflow-x-hidden overflow-y-scroll flex justify-center items-center no-scrollbar">
            <Hero />
        </div>
    </div>
    
    )
}
