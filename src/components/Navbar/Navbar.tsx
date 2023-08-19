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
        <nav className={`flex h-14 w-full justify-between bg-transparent px-2`}>
            <main className={`flex items-center`}>
                <h1 className={`flex cursor-pointer text-center text-3xl text-primary`}>
                    <Link href={`/`}>
                         <span>
                            {siteConfig.siteName.toUpperCase()}
                         </span>
                    </Link>
                </h1>
            </main>
            <main className={`flex items-center`}>
                <span className={`cursor-pointer text-4xl text-primary`} onClick={() => {
                    setNavOpen(!isNavOpen)
                }}>
                    <HiOutlineMenu/>
                </span>
            </main>

            {isNavOpen ? <MobileNavMenu pages={siteConfig.pages} isNavOpen={isNavOpen}/> :
                <MobileNavMenu pages={siteConfig.pages} isNavOpen={isNavOpen}/>}
        </nav>
    );
}


const MobileNavMenu = ({pages, isNavOpen}: TMobileNavMenu) => {
    return (
        <main className={cn(
            `absolute left-0 h-screen w-full bg-primary transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`)}>
            <ul className={cn(`flex content-center items-center justify-center`)}>
                <li className={cn(`flex cursor-pointer flex-col gap-4 text-center text-2xl text-white`)}>
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
            `fixed top-0 w-full transition-colors duration-300 ease-in-out ${isScrolled ? 'bg-white' : 'bg-transparent'} flex h-16 justify-between px-4`)}>
            <main className={`flex items-center`}>
                <h1 className={`flex cursor-pointer text-center text-3xl text-primary`}>
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
                                        `mx-4 border-b-2 border-white transition-all duration-200 ease-in hover:border-primary`
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



