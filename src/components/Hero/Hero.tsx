import Image from "next/image";
import {SiteConfig} from "@/Config/siteConfig";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";


type THero = SiteConfig['hero']


export function Hero({ title, btn, images }: THero) {

    return (
        <div className="absolute top-0 flex h-screen md:h-[80vh] w-screen flex-col items-center justify-center bg-black">

            <Image className="relative h-screen w-screen object-cover object-center" src={images[0].src} alt={images[0].alt} priority fill />

            <div className="absolute h-screen md:h-[80vh] w-screen bg-black opacity-10"></div>

            <h1 className="relative z-10 mb-4 text-5xl font-bold text-white">{title}</h1>

            <Button className={cn(`relative z-10 mt-4 border-2 border-white bg-transparent px-10 py-6 text-xl text-white transition-colors duration-300 hover:bg-white md:text-2xl md:hover:text-primary`)}>
                {btn}
            </Button>
        </div>
    );
}

