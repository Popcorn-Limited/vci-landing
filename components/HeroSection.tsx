import Navbar from "./Navbar";
import { useRef, useEffect } from "react";

export default function HeroSection({
    isLoaded
}: {
    isLoaded?: boolean
}) {
    const scrollForMoreRef = useRef<HTMLElement | null>(null)
    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        console.log(isLoaded)
        if (isLoaded) {
            scrollForMoreRef.current?.style.setProperty('height', '180px')
            videoRef.current?.play()
        }
    }, [isLoaded])

    return (
        <>
            <video className={`absolute w-full object-cover h-[900px]`} src="videos/HeroSectionVideo.mp4" loop muted ref={videoRef} />
            <div className={`h-[900px] flex flex-col`}>
                <Navbar />
                <div className={`w-full grow z-10 py-12 smmd:py-[100px] px-6 smmd:px-8 flex smmd:gap-10 flex-col smmd:flex-row justify-between items-end`}>
                    <span className={`text-[40px] smmd:text-[80px] max-w-[1000px] leading-none`}>Create custom automated asset strategies in minutes with Vaultcraft</span>
                    <div className={`rotate-180 uppercase flex items-center gap-2 smmd:pl-12`} style={{
                        writingMode: 'vertical-rl',
                    }}>
                        <span>scroll for more</span>
                        <span className={`w-[1px] duration-[0.8s] h-0 bg-white`} ref={scrollForMoreRef} />
                    </div>
                </div>
            </div>
        </>
    )
}