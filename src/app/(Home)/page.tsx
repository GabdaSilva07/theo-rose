import {Hero} from "@/components/Hero/Hero";
import {cn} from "@/lib/utils";
import {siteConfig} from "@/Config/siteConfig";

export default function Home() {
    return (
        <main className="">
            <div className={cn(``)}>
                <Hero title={siteConfig.hero.title} btn={siteConfig.hero.btn} images={siteConfig.hero.images}/>
            </div>
        </main>
    )
}
