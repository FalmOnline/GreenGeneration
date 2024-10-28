"use client"; 

import Image from 'next/image';
import logo from '../../public/Logo-green-generation.svg';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header({ className = '' }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        setIsSticky(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="flex flex-col z-50 bg-gg-bej z-9999 shadow-[0_1px_0_0_rgba(255,255,255,0.2)] sticky top-0">
            {/* <!-- Desktop Menu --> */}
            <div className="hidden lg:block">
                <div className="logo-container container lg:max-w-screen-xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto flex flex-row justify-between items-center px-8 py-3">
                    {/* <!-- Logo --> */}
                    <div>
                        <Link href="/">
                            <Image src={logo} alt="Green Generation logo" width={111} height={51} />
                        </Link>
                    </div>
                    {/* <!-- Menu --> */}
                    <nav>
                        <ul className="[&>li]:list-none [&>li]:text-base flex justify-center [&>li>a]:text-black [&>li>a:hover]:text-gg-dark-green [&>li>a]:px-4">
                            <li className='no-underline'><Link className='no-underline' href="/despre-noi">Despre noi</Link></li>
                            <li className='no-underline text-red-700'><Link className="bg-gg-bej p-3 rounded-3xl no-underline" href="/blog">Resurse educaționale</Link></li>
                            <li className='no-underline'><Link className='no-underline' href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* <!-- Mobile Menu --> */}
            <div className="lg:hidden bg-gg-bej w-screen z-50">
                <div className="px-4 lg:px-0 lg:container flex flex-col mx-auto">
                    {/* <!-- Logo and Hamburger Icon --> */}
                    <div className="flex flex-row justify-between items-center py-3 px-3">
                        <div>
                            <Link href="/">
                                <Image src={logo} alt="Green Heroes logo" width={100} height={46} />
                            </Link>
                        </div>
                        {/* <!-- Hamburger Icon --> */}
                        <div className="cursor-pointer flex flex-col justify-center items-center space-y-2" onClick={toggleMenu}>
                            <div className={`w-7 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[11px]' : ''}`}></div>
                            <div className={`w-7 h-0.5 bg-black transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                            <div className={`w-7 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></div>
                        </div>
                    </div>
                    {/* <!-- Mobile Navigation --> */}
                    <nav className={`transition-transform duration-500 ease-in-out transform w-full z-50 ${menuOpen ? 'absolute top-[70px] translate-y-0 opacity-100 h-screen inset-0 pointer-events-auto' : 'translate-y-0 h-0 pointer-events-none'}`}>
                        <div className={`transition-all duration-500 ease-in-out bg-gg-bej  ${menuOpen ? 'h-screen w-screen opacity-100 absolute inset-0' : 'h-0 opacity-0 w-screen absolute inset-0'}`}></div>
                        <ul className={`meniu-mobil menu z-20 fixed top-0 left-0 w-full p-8 [&>li]:list-none [&>li]:text-center [&>li>a]:no-underline [&>li]:text-lg [&>li]:leading-8 [&>li>a:hover]:text-gg-green ${menuOpen ? 'opacity-100' : 'opacity-0 h-0'}`}>
                            <li className={`transition-all duration-700 ease-in-out no-underline  ${menuOpen ? 'opacity-100' : 'opacity-0 text-xs'}`}><Link className="no-underline hover:text-gg-green" href="/despre-noi" onClick={toggleMenu}>Despre noi</Link></li>
                            <li className={`transition-all duration-700 ease-in-out no-underline  ${menuOpen ? 'opacity-100' : 'opacity-0 text-xs'}`}><Link className="no-underline" href="/blog" onClick={toggleMenu}>Resurse educaționale</Link></li>
                            <li className={`transition-all duration-1000 ease-in-out no-underline  ${menuOpen ? 'opacity-100' : 'opacity-0 text-xs'}`}><Link className="no-underline" href="/contact" onClick={toggleMenu}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}


