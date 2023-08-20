import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Image, {StaticImageData} from "next/image";


type THero = {
    title: string
    btn: string
    backGround: {
        alt: string
        src: StaticImageData
    }
}


export function Hero({title, btn, backGround} : THero) {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-black bg-cover bg-center"
            style={{backgroundImage: 'url(path_to_your_image.jpg)'}}>
            <Image src={backGround.src} alt={backGround.alt}/>
            <h1 className="mb-4 text-5xl font-bold text-white">{title}</h1>
            <Button className={cn(` bg-white px-6 py-2 text-primary transition duration-300`)}>Click
                {btn}
            </Button>
        </div>

    );
}
