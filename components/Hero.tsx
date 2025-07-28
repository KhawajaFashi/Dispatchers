import SocialWheel from './social'
import { Button } from './ui/button'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div>
            <div className="relative min-h-screen max-w-screen font-sans text-white">
                {/* Navbar */}
                <Navbar />

                {/* Hero Section with Video Background */}
                <div className='absolute inset-0 overflow-hidden'>
                    <video
                        autoPlay
                        muted
                        loop
                        className="absolute w-full h-screen object-cover"
                        src="/hero-bg.mp4"
                    />
                </div>
                <section className="relative flex items-center justify-center h-screen w-screen pt-0 xl:pt-20">
                    <div className="relative z-20 flex flex-col items-center justify-center px-12">
                        <h1 className="text-5xl lg:text-7xl xl:text-8xl mb-12 font-bold text-center">
                            Start your shipping  <br />journey with us.
                        </h1>
                        <p className="text-md lg:text-lg text-white/90 mb-8 max-w-4xl text-center">
                            American Smart Trucking specializes in handling the back-office operations for owner-operators & trucking fleets. We also help shippers deliver on time, every time with minimum headache.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Button className="rounded-lg p-6 lg:p-7 cursor-pointer text-lg lg:text-2xl">Contact Us</Button>
                            <Button className="glass-card p-6 lg:p-7 cursor-pointer text-lg lg:text-2xl">About Us</Button>
                        </div>
                    </div>
                    <SocialWheel />
                </section>

                {/* ...existing code... (You can add more sections below) */}
            </div>
        </div>
    )
}

export default Hero