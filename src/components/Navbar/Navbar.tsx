'use client'
import {isMobile} from 'react-device-detect'
import {lazy, Suspense, useEffect, useState} from "react";


const MobileNavLazy = lazy(() => import('./MobileNav'));
const DesktopNavLazy = lazy(() => import('./DesktopNav'));


export function Navbar() {
    const [isClient, setIsClient] = useState<boolean>(false);
    const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
        setIsMobileDevice(isMobile);
    }, []);

    return (
        <Suspense fallback={<div hidden>Loading...</div>}>
            {isClient ? (isMobileDevice ? <MobileNavLazy/> : <DesktopNavLazy/>) : null}
        </Suspense>
    );
}


