import { useRef, useState, useEffect } from "react";
import AppButton from "@/components/Common/AppButton";
import { typeAnimate } from "@/helpers/typingAnimation";

export default function SDKSection() {
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
        <div className={`bg-[#030E22] py-[64px] smmd:py-[160px] px-[24px] smmd:px-[80px] flex flex-col smmd:flex-row-reverse gap-[48px] justify-between items-end min-h-[750px]`}>
            <div className={`height-full flex flex-col gap-8 smmd:w-[680px] z-[1]`}>
                <p className={`font-georgia italic text-[#DFFF1C] font-[20px]`}>Vaultcraft SDK</p>
                <h2 className={`text-[40px] font-khTeka smmd:text-[56px] leading-none max-w-[655px]`} ref={titleRef}>
                    Build cross‑chain automated vault strategies with just a
                    <span className={`italic text-[#F289E6] font-georgia`}> few lines of code</span>
                </h2>
                <span className={`max-w-[500px] whitespace-pre-line`} ref={descriptionRef}>
                    <p>Work seamlessly with any token and from any chain.</p><br className="hidden md:block" />
                    <p>Integrate the Vaulcraft widget with just few lines of code.</p><br className="hidden md:block" />
                    <p>Looking for a completely custom UX? Use the Vaulcraft API & SDK instead.</p><br className="hidden md:block" />
                </span>
                <a className={`self-start`} href="https://docs.pop.network/products/vaultcraft">
                    <AppButton className={`font-bold w-full max-w-[176px]`} text={'Start Building'} />
                </a>
            </div>
            <div className={`smmd:px-10 w-full smmd:w-auto`}>
                <img className={`w-[420px] m-auto`} src="images/SDKSectionCode.png" alt="code" />
            </div>
        </div>
    )
}