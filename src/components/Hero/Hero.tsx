import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {SiteConfig} from "@/Config/siteConfig";


type THero = SiteConfig['hero']


export function Hero({title, btn, images} : THero) {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-black bg-cover bg-center"
            style={{backgroundImage: 'url(path_to_your_image.jpg)'}}>
            <Image className={cn(`absolute z-0 h-screen w-screen object-cover object-center`)} src={images[0].src} alt={images[0].alt}/>
            <h1 className="mb-4 text-5xl font-bold text-white">{title}</h1>
            <Button className={cn(` bg-white px-6 py-2 text-primary transition duration-300`)}>Click
                {btn}
            </Button>
        </div>

    );
}
