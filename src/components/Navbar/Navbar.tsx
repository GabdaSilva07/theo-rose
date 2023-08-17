'use client'
import {isMobile} from 'react-device-detect'
import {useLayoutEffect, useState} from "react";
import {siteConfig, SiteConfig} from "@/Config/siteConfig";
import Link from "next/link";
import {HiOutlineMenu} from "react-icons/hi";
import {cn} from "@/lib/utils";

export function Navbar() {
    const [isClient, setIsClient] = useState(false);

    useLayoutEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;
    return isMobile ? <MobileNav/> : <DesktopNav/>;
}


const MobileNav = () => {
    const [isNavOpen, setNavOpen] = useState<boolean>(false);


    return (
        <nav className={`bg-primary flex h-14 w-full justify-between px-2`}>
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
        </nav>
    );
}

const DesktopNav = () => {
    return (
        <nav className={`bg-primary flex h-16 w-full justify-between px-4`}>
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
                <ul className={`flex items-center`}>
                    <li className={`cursor-pointer text-xl text-white`}>
                        {siteConfig.pages.map((page: SiteConfig['pages'][0]) => {
                            return (
                                <Link href={page.path} key={page.path}>
                                    {/*//slide in from left on hover*/}
                                    <span className={cn("mx-4 border-b-2 border-opacity-0 ")}>
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



