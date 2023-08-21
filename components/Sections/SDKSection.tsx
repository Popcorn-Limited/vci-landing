import { useRef, useState, useEffect } from "react";
import AppButton from "@/components/Common/AppButton";
import {typeAnimate} from "@/helpers/typingAnimation";

export default function SDKSection() {
    const [animationStep, setAnimationStep] = useState(0)

    const titleRef = useRef<HTMLDivElement>(null)
    const descriptionRef = useRef<HTMLDivElement>(null)
    let isUseEffectDone = false

    useEffect(() => {
        if (isUseEffectDone) return
        isUseEffectDone = true

        if (titleRef.current) {
            typeAnimate(titleRef.current, {
                speed: 33,
                afterAnimation: () => {
                    typeAnimate(descriptionRef.current, {
                        speed: 10,
                        afterAnimation: () => {
                            setAnimationStep(2)
                        }
                    })
                    setAnimationStep(1)
                }
            })
        }
    }, [])

    return (
        <div className={`bg-[#030E22] py-[64px] smmd:py-[160px] px-[24px] smmd:px-[80px] flex flex-col smmd:flex-row-reverse gap-[48px] smmd:gap-[140px] items-end min-h-[750px]`}>
            <div className={`grow height-full flex flex-col gap-8`}>
                <span className={`font-georgia italic text-[#DFFF1C] font-[20px]`}>Vaultcraft SDK</span>
                <div className={`text-[40px] font-khTeka smmd:text-[56px] leading-none max-w-[600px]`} ref={titleRef}>
                    Cross‑chain stake, deposit, withdraw with
                    <span className={`italic text-[#F289E6] font-georgia`}> few lines of code</span>
                </div>
                <span className={`max-w-[500px] whitespace-pre-line ${animationStep < 1 && 'opacity-0'}`} ref={descriptionRef}>
                    {'Work seamlessly with any token and from any chain. \n' +
                        'Integrate the Vaulcraft Widget with just few lines of code. \n' +
                        'Looking for a completly custom UX? Use Vaulcraft API & SDK instead'}
                </span>
                <a className={`self-start duration-[1s] ${animationStep < 2 && 'opacity-0 translate-y-full'}`} href="https://google.com/">
                    <AppButton className={`font-bold w-full max-w-[176px]`} text={'Start Building'} />
                </a>
            </div>
            <div className={`p-10 bg-[#141416] border-[2px] border-[rgba(255,255,255,0.2)] rounded-[20px] w-full smmd:w-auto`}>
                <img className={`w-[420px] m-auto`} src="images/SDKSectionCode.png" alt="code" />
            </div>
        </div>
    )
}