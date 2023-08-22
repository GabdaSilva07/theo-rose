import {useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {siteConfig, SiteConfig} from "@/Config/siteConfig";
import Link from "next/link";
import {FaLocationDot} from "react-icons/fa6";
import {BiSolidPhone} from "react-icons/bi";
import {BsFillClockFill} from "react-icons/bs";
import {HiOutlineMenu} from "react-icons/hi";
import {IoClose} from "react-icons/io5";


type TMobileNavMenu = {
    isNavOpen?: boolean
    pages: SiteConfig['pages']
}


const  MobileNav = () => {
    const [isNavOpen, setNavOpen] = useState<boolean>(false);
    return (
        <nav className={`z-50 flex h-14 w-full justify-between bg-transparent px-2`}>
            <main className={`flex items-center`}>
                <h1 className={cn(
                    `z-30 flex cursor-pointer text-center text-3xl text-white transition-colors duration-300  ease-in `)}>
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
                    <span className="z-40 cursor-pointer text-4xl text-white" onClick={() => setNavOpen(!isNavOpen)}>
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

export default MobileNav;