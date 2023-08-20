'use client'
import {isMobile} from 'react-device-detect'
import {useEffect, useState} from "react";
import {siteConfig, SiteConfig} from "@/Config/siteConfig";
import Link from "next/link";
import {HiOutlineMenu} from "react-icons/hi";
import {cn} from "@/lib/utils";
import {IoClose} from "react-icons/io5";
import {BiSolidPhone} from "react-icons/bi";
import {FaLocationDot} from "react-icons/fa6";
import {BsFillClockFill} from "react-icons/bs";


type TMobileNavMenu = {
    isNavOpen?: boolean
    pages: SiteConfig['pages']
}

export function Navbar() {
    const [isClient, setIsClient] = useState<boolean>(false);
    const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
        setIsMobileDevice(isMobile);
    }, []);

    if (!isClient) return null;
    return isMobileDevice ? <MobileNav/> : <DesktopNav/>;
}


const MobileNav = () => {
    const [isNavOpen, setNavOpen] = useState<boolean>(false);
    return (
        <nav className={`z-50 flex h-14 w-full justify-between bg-transparent px-2`}>
            <main className={`flex items-center`}>
                <h1 className={cn(
                    `z-30 flex cursor-pointer text-center text-3xl transition-colors duration-300 ease-in ${isNavOpen ? ' text-white ' : "text-primary"}`)}>
                    <Link href={`/`}>
                         <span>
                            {siteConfig.siteName.toUpperCase()}
                         </span>
                    </Link>
                </h1>
            </main>
            <main className={`flex items-center`}>
                <span className={cn(
                    `cursor-pointer ${isNavOpen ? "z-40 text-5xl text-white opacity-100 transition-opacity duration-500 ease-in-out" : "text-4xl text-primary opacity-0 "}`)}
                    onClick={() => setNavOpen(!isNavOpen)}>
                    <IoClose/>
                </span>
                {!isNavOpen &&
                    <span className="cursor-pointer text-4xl text-primary" onClick={() => setNavOpen(!isNavOpen)}>
                        <HiOutlineMenu/>
                    </span>
                }
            </main>

            <MobileNavMenu pages={siteConfig.pages} isNavOpen={isNavOpen}/>
        </nav>
    );
}


const MobileNavMenu = ({pages, isNavOpen}: TMobileNavMenu) => {

    // Disable scrolling when isNavOpen is true
    useEffect(() => {
        if (isNavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto'; // Reset to default when component unmounts
        };
    }, [isNavOpen]);

    return (
        <main className={cn(
            `fixed left-0 z-20 flex h-screen w-full flex-col items-center justify-center bg-primary transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`)}>

            <ul className={cn(`flex flex-col items-center gap-4`)}>
                {
                    pages.map((page: SiteConfig['pages'][0]) => {
                        return (
                            <li key={page.title} className={cn(`z-20 cursor-pointer text-2xl text-white`)}>
                                <Link href={page.path}>
                                    <span>
                                        {page.title}
                                    </span>
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>

            <main className={cn(`absolute bottom-0 flex w-full flex-col justify-end pb-4`)}>
                <div className={cn(`my-2 flex flex-col items-center`)}>
                    <span className={cn(`text-white`)}><BiSolidPhone/></span>
                    <span className={cn(`text-sm text-white`)}>{siteConfig.mobile}</span>
                </div>
                <div className={cn(`my-2 flex flex-col items-center`)}>
                    <span className={cn(`text-white`)}><FaLocationDot/></span>
                    <span className={cn(`text-sm text-white`)}>{siteConfig.address}</span>
                </div>
                <div className={cn(`my-2 flex flex-col items-center`)}>
                    <span className={cn(`text-white`)}><BsFillClockFill/></span>
                    <span className={cn(`text-sm text-white`)}>{siteConfig.openingHours}</span>
                </div>
            </main>
        </main>
    );
}


const DesktopNav = () => {

    const [isScrolled, setIsScrolled] = useState<boolean>(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {  // Adjust this value as needed
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={cn(
            `fixed top-0 z-50 w-full transition-colors duration-300 ease-in-out ${isScrolled ? 'bg-white bg-opacity-60' : 'bg-transparent'} flex h-16 justify-between px-4`)}>
            <main className={`flex items-center`}>
                <h1 className={`flex cursor-pointer text-center text-3xl ${isScrolled ? 'border-primary text-primary' : 'border-white text-white'}`}>
                    <Link href={`/`}>
                 <span>
                    {siteConfig.siteName.toUpperCase()}
                 </span>
                    </Link>
                </h1>
            </main>
            <main className={`flex items-center`}>
                <ul className={`flex items-center`}>
                    <li className={cn(
                        `animate-slideInFromLeft cursor-pointer text-xl text-primary`)}>
                        {siteConfig.pages.map((page: SiteConfig['pages'][0]) => {
                            return (
                                <Link
                                    href={page.path}
                                    key={page.path}
                                    className={cn(
                                        `mx-4 border-b-2 border-transparent transition-all duration-200 ease-in ${isScrolled ? 'border-transparent text-primary hover:border-primary' : 'text-white hover:border-white'}
                                    `)}
                                >
                                      <span>
                                         {page.title}
                                     </span>
                                </Link>
                            );
                        })}
                    </li>
                </ul>
            </main>
        </nav>

    );
}



