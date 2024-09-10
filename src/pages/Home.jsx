import Hero from '../components/Hero/Hero'
import SideBar from '../components/SideBar/SideBar'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
    return (
        <div className="flex gap-[2%] no-scrollbar">
            <div className=" w-[7%] hidden md:hidden lg:block fixed left-[20px]">
                <Navbar />
            </div>
            <div className="w-[20%] hidden md:hidden lg:block fixed right-[20px]">
                <SideBar />
            </div>
            <div className="w-[69%] fixed  rounded-3xl my-[13px] ml-[9%] overflow-x-hidden overflow-y-scroll flex justify-center items-center no-scrollbar">
                <Hero />
            </div>
        </div>
    )
}
