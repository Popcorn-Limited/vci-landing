import AppButton from "@/components/Common/AppButton";
import { useRef, useEffect, useState } from "react";
import { typeAnimate } from "@/helpers/typingAnimation";

export default function GetStartedSection() {
    const [animationStep, setAnimationStep] = useState(0)

    const titleRef = useRef<HTMLDivElement>(null)
    const descriptionRef = useRef<HTMLDivElement>(null)



    useEffect(() => {
        // function animate() {
        //     if (titleRef.current) {
        //         typeAnimate(titleRef.current, {
        //             speed: 33,
        //             afterAnimation: () => {
        //                 typeAnimate(descriptionRef.current, {
        //                     speed: 10,
        //                     afterAnimation: () => {
        //                         setAnimationStep(2)
        //                     }
        //                 })
        //                 setAnimationStep(1)
        //             }
        //         })
        //     }
        // }
        // if (animationStep === 0) animate()
    }, [])

    return (
        <div className={`min-h-[1100px] bg-gradient-to-b from-black to-[#030E22] pt-60 smmd:pl-8 smmd:pr-0 flex flex-col smmd:flex-row smmd:gap-5 gap-16`}>
            <div className={`flex flex-col smmd:pb-5 px-6 items-start z-10`}>
                <div className={`text-[40px] smmd:text-[56px] max-w-[740px] leading-none`} ref={titleRef}>
                    <span className={`opacity-60`}>The</span>
                    <span className={`italic text-[#7AFB79] font-georgia opacity-100`}> no code toolkit </span>
                    <span className={`opacity-60`}>for</span>
                    <span className={`italic text-[#DFFF1C] font-georgia`}> customizing & modularizing </span>
                    <span className={`opacity-60`}>automated</span>
                    <span className={`italic text-[#E93BD5] font-georgia`}> asset strategies </span>
                    <span className={`opacity-60`}>on any evm-compatible chain</span>
                </div>
                <span className={`smmd:max-w-[650px] smmd:pl-[200px] py-8`} ref={descriptionRef}>
                    {'With VaultCraft, you can easily create a cross-chain asset strategy in just a few clicks. Whether you\'re new to DeFi, a developer or a portfolio manager, VaultCraft makes it easy to create custom vaults  that fit your specific needs.'}
                </span>
                <div className={`smmd:pl-[200px]`}>
                    <a href="https://docs.pop.network/products/vaultcraft">
                        <AppButton className={`font-bold w-full max-w-[176px]`} text={'Get Started'} />
                    </a>
                </div>
            </div>
            <img src="/images/GetStartedSectionBg.png" className={`absolute right-0 max-w-[1300px] top-[970px]`} />
        </div>
    )
}