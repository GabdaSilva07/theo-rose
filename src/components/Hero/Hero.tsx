import Image from "next/image";
import {SiteConfig} from "@/Config/siteConfig";
import {Button} from "@/components/ui/button";


type THero = SiteConfig['hero']


export function Hero({title, btn, images} : THero) {
    return (
        <div className="relative top-0 flex h-screen w-screen flex-col items-center justify-center bg-black">

            {/* Image */}
            <Image className="absolute z-0 h-screen w-screen object-cover object-center" src={images[0].src} alt={images[0].alt} priority fill/>

            {/* Title */}
            <h1 className="relative z-10 mb-4 text-5xl font-bold text-white">{title}</h1>


            <Button className="relative z-10 bg-white px-6 py-2 text-primary transition duration-300">
                {btn}
            </Button>
        </div>
    );
}

