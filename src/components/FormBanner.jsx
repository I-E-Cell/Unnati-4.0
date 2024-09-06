// import starsImg from './../assets/stars.png';

export default function FormBanner() {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-4'>
            <div className='w-full'>
                <p className='w-full text-start text-5xl text-white font-medium'>Register Now</p>
                <p className='w-full text-start text-2xl text-white font-medium'>Let’s get things rolling</p>
            </div>
            <p className='text-white text-base font-extralight'>Lorem ipsum dolor sit amet consectetur. Amet augue lacus morbi fringilla enim cras ipsum ut. Duis nulla eget quam faucibus sit diam.Lorem ipsum dolor sit amet consectetur. Amet augue lacus morbi fringilla enim cras ipsum ut. Duis nulla eget quam faucibus sit diam.</p>
            {/* <img
                src={starsImg}
                alt="stars"
                className='w-48'
            /> */}
        </div>
    );
}