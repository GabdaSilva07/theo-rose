import { Hero } from "@/components/Hero/Hero";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/Config/siteConfig";
import BusinessOverview from "@/components/BusinessOverview/BusinessOverview";

export default function Home() {
    return (
        <main className="h-[200vh] w-full flex flex-col">
            <Hero title={siteConfig.hero.title} btn={siteConfig.hero.btn} images={siteConfig.hero.images} />
            <BusinessOverview />
        </main>
    )
}
