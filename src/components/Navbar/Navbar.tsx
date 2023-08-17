'use client'
import { isMobile } from 'react-device-detect'
import { useLayoutEffect, useState} from "react";

export function Navbar() {
    const [isClient, setIsClient] = useState(false);

    useLayoutEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;
    return isMobile ? <MobileNav /> : <DesktopNav />;
}


const MobileNav = () => {
    return (
        <>
            <h1>
                Mobile
            </h1>
        </>
    );
}

const DesktopNav = () => {
    return (
        <>
        <h1>
            Desktop
        </h1>
        </>
    );
}



