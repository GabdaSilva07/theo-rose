'use client'
import {isMobile} from 'react-device-detect'
import {useEffect, useLayoutEffect, useState} from "react";
import {siteConfig, SiteConfig} from "@/Config/siteConfig";
import Link from "next/link";
import {HiOutlineMenu} from "react-icons/hi";
import {cn} from "@/lib/utils";


type TMobileNavMenu = {
    isNavOpen?: boolean
    pages: SiteConfig['pages']
}


export function Navbar() {
    const [isClient, setIsClient] = useState<boolean>(false);
    useLayoutEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;
    return isMobile ? <MobileNav/> : <DesktopNav/>;
}


const MobileNav = () => {
    const [isNavOpen, setNavOpen] = useState<boolean>(false);


    return (
        <nav className={`flex h-14 w-full justify-between bg-primary px-2`}>
            <main className={`flex items-center`}>
                <h1 className={`flex cursor-pointer text-center text-3xl text-white`}>
                    <Link href={`/`}>
                         <span>
                            {siteConfig.siteName.toUpperCase()}
                         </span>
                    </Link>
                </h1>
            </main>
            <main className={`flex items-center`}>
                <span className={`cursor-pointer text-4xl text-white`} onClick={() => {
                    setNavOpen(!isNavOpen)
                }}>
                    <HiOutlineMenu/>
                </span>
            </main>

            {isNavOpen ? <MobileNavMenu pages={siteConfig.pages} isNavOpen={isNavOpen}/> : null}
        </nav>
    );
}



const MobileNavMenu = ({pages, isNavOpen} : TMobileNavMenu) => {
    return (
        <main className={cn(`absolute left-0 h-screen w-full bg-black`)}>
            <div className={cn(`flex items-center`)}>
                <ul className={cn(`flex items-center justify-center`)}>
                    <li className={cn(`cursor-pointer text-2xl text-white`)}>
                        {
                            pages.map((page: SiteConfig['pages'][0]) => {
                                return (
                                    <Link href={page.path} key={page.path}>
                                    <span>
                                        {page.title}
                                    </span>
                                    </Link>
                                );
                            })
                        }
                    </li>
                </ul>
            </div>
        </main>
    );
}






const DesktopNav = () => {

    const [isScrolled, setIsScrolled] = useState<boolean>(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {  // Adjust this value as needed
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
            `fixed top-0 w-full transition-colors duration-300 ease-in-out ${isScrolled ? 'bg-white' : 'bg-primary'} flex h-16 justify-between px-4`)}>
            <main className={`flex items-center`}>
                <h1 className={`flex cursor-pointer text-center text-3xl ${isScrolled ? 'text-primary' : 'text-white'}`}>
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
                        `animate-slideInFromLeft cursor-pointer text-xl ${isScrolled ? 'text-primary' : 'text-white'}`)}>
                        {siteConfig.pages.map((page: SiteConfig['pages'][0]) => {
                            return (
                                <Link
                                    href={page.path}
                                    key={page.path}
                                    className={cn(
                                        `mx-4 border-b-2 ${isScrolled ? 'border-white hover:border-primary' : 'border-transparent hover:border-white'} transition-all duration-200 ease-in`
                                    )}
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



