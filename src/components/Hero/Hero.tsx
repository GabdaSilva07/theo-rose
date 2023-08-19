import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

export function Hero() {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-black bg-cover bg-center"
            style={{backgroundImage: 'url(path_to_your_image.jpg)'}}>

            <h1 className="mb-4 text-5xl font-bold text-white">Your Title Here</h1>
            <Button className={cn(` bg-white px-6 py-2 text-primary transition duration-300`)}>Click
                Me
            </Button>
        </div>

    );
}
