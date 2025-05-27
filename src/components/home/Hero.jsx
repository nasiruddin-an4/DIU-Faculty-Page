import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className=" text-center mt-36">
      <div className="container mx-auto px-4  z-10 ">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-primary-600">
            Welcome to the DIU Faculty Directory
          </h1>
          <p className="text-base md:text-lg text-neutral-800 text-center">
            Discover our distinguished faculty members across various departments and explore their expertise, research interests, and achievements.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  )
}

export default Hero