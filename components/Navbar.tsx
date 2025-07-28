"use client";
import Image from 'next/image'
import Link from 'next/link';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10); // adjust threshold if needed
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`xl:flex hidden justify-center items-center w-screen h-32 fixed top-0 left-0 z-50 ${scrolled ? 'top-7 ': ''}`}>
            <nav className={`w-full flex items-center justify-between text-[25px] px-12 py-7 glass-card ${scrolled ? '!w-[90vw] rounded-full' : ''}`}
                style={{ transition: '0.3s' }}
            >
                <div className="flex items-center">
                    <Image src="/logo.png" alt="Logo" width={50} height={50} />
                    <span className="font-bold tracking-wide pl-2">Maavix Shipping</span>
                </div>
                <div className='flex px-2 py-4 z-20 text-black'>
                    <ul className="flex gap-4">
                        <Link href="#home" className="link-hover">
                            <span className="link-text-current">Home</span>
                            <span className="link-text-new">Home</span>
                        </Link>
                        <Link href="#services" className="link-hover">
                            <span className="link-text-current">Services</span>
                            <span className="link-text-new">Services</span>
                        </Link>
                        <Link href="#about" className="link-hover">
                            <span className="link-text-current">About</span>
                            <span className="link-text-new">About</span>
                        </Link>
                        <Link href="#contact" className="link-hover">
                            <span className="link-text-current">Contact</span>
                            <span className="link-text-new">Contact</span>
                        </Link>
                    </ul>
                </div>
                <div>
                    <Button>Get Started</Button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;