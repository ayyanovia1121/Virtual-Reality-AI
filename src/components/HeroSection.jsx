import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-tight">
                <span className='bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'>VRealityAI</span> web developer tools for <br />
                <span className='bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'>The next generation of Virtual Reality</span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-300 max-w-4xl">
                Emporty AI web developer tools for The next generation of Virtual Reality.
                easily design and arrange your VR environments with a user-friendly drag-and-drop interface.
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="py-3 px-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-md">
                    Get Started
                </a>
                <a href="#" className="py-3 px-4 bg-gradient-to-r from-purple-700 to-pink-500 text-white rounded-md ml-4">
                    Documantation
                </a>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-purple-300 shadow-purple-400 mx-2 my-4'>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-purple-300 shadow-purple-400 mx-2 my-4'>
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>
        </div>
    )
}

export default HeroSection