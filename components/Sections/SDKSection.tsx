import React, { useEffect, useRef, useState } from 'react';
import Typist from 'react-typist';
import AppButton from "@/components/Common/AppButton";

export default function SDKSection() {
    const sectionRef = useRef(null);
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setStartTyping(true);
                observer.disconnect();
            }
        }, {
            threshold: 0.5
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className={`bg-[#030E22] py-[64px] smmd:py-[160px] px-[24px] smmd:px-[80px] flex flex-col smmd:flex-row-reverse gap-[48px] justify-between items-end min-h-[750px]`}>
            <div className={`height-full flex flex-col gap-8 smmd:w-[680px] z-[1]`}>
                <p className={`font-georgia italic text-[#DFFF1C] font-[20px]`}>Vaultcraft SDK</p>

                {startTyping && (
                    <Typist cursor={{ show: false }} avgTypingDelay={12.5}>
                        <h2 className={`text-[40px] font-khTeka smmd:text-[56px] leading-none max-w-[655px]`}>
                            Build cross‑chain automated vault strategies with just a
                            <span className={`italic text-[#F289E6] font-georgia`}> few lines of code</span>
                        </h2>
                        <span className={`max-w-[500px] whitespace-pre-line`}>
                            <p>Work seamlessly with any token and from any chain.</p>
                            <p>Integrate the Vaulcraft widget with just a few lines of code.</p>
                            <p>Looking for a completely custom UX? Use the Vaulcraft API & SDK instead.</p>
                        </span>
                    </Typist>
                )}

                <a className={`self-start`} href="https://docs.pop.network/products/vaultcraft">
                    <AppButton className={`font-bold w-full max-w-[176px]`} text={'Start Building'} />
                </a>
            </div>
            <div className={`smmd:px-10 w-full smmd:w-auto`}>
                <img className={`w-[420px] m-auto`} src="images/SDKSectionCode.png" alt="code" />
            </div>
        </div>
    );
}
