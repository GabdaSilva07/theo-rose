import {SiteConfig, siteConfig} from "@/Config/siteConfig";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {useLayoutEffect, useState} from "react";


const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    useLayoutEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
};

const DesktopNav = () => {
    const scrollPosition = useScrollPosition();
    const isScrolled = scrollPosition > 800; // Adjust this value as needed

    return (
        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
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

export default DesktopNav;
