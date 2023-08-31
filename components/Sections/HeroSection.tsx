import { useRef, useEffect } from "react";
import { Navbar } from "@/components/Sections"

export default function HeroSection({
    isLoaded,
    scrollHowItWorks,
    scrollContact
}: {
    isLoaded?: boolean
    scrollHowItWorks?: () => void
    scrollContact?: () => void
}) {
    const scrollForMoreRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (isLoaded) {
            scrollForMoreRef.current?.style.setProperty('height', '180px')
        }
    }, [isLoaded])

    return (
        <div className={`h-[900px] flex flex-col relative`}>
            <Navbar />
            <div className={`w-full grow z-10 py-12 smmd:py-[100px] px-6 smmd:px-8 flex smmd:gap-10 flex-col smmd:flex-row justify-between items-end`}>
                <span className={`text-[40px] smmd:text-[80px] max-w-[1000px] leading-none`}>Build custom, automated DeFi strategies in minutes with <b>VaultCraft</b></span>
                <div className={`rotate-180 uppercase flex items-center gap-2 smmd:pl-12`} style={{
                    writingMode: 'vertical-rl',
                }}>
                    <span>scroll for more</span>
                    <span className={`w-[1px] duration-[0.8s] h-0 bg-white`} ref={scrollForMoreRef} />
                </div>
            </div>
            <video className={`hidden smmd:block absolute w-full object-cover h-[900px]`} src="videos/HeroSectionVideo.mp4" loop muted autoPlay />
            <img className={`smmd:hidden absolute w-full bottom-0`} src="/images/MobileHeroSectionBg.png" />
        </div>
    )
}