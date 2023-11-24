import React, { useEffect, useRef, useState } from 'react';
import Typist from 'react-typist';
import AppButton from "@/components/Common/AppButton";

export default function GetStartedSection() {
    const sectionRef = useRef(null);
    const [startTyping, setStartTyping] = useState(false);
    const [typingDone, setTypingDone] = useState(false);
    const [opacity, setOpacity] = useState(0);

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

    useEffect(() => {
        if (typingDone) {
            setTimeout(() => {
                setOpacity(1);
            }, 0);
        }
    }, [typingDone]);

    return (
        <div ref={sectionRef} className={`min-h-[1100px] bg-gradient-to-b from-black to-[#030E22] pt-60 smmd:pl-8 smmd:pr-0 flex flex-col smmd:flex-row smmd:gap-5 gap-16`}>
            <div className={`flex flex-col smmd:pb-5 px-6 items-start z-10`}>
                {startTyping && (
                    <Typist cursor={{ show: false }} avgTypingDelay={12.5} onTypingDone={() => setTypingDone(true)}>
                        <div className={`text-[40px] smmd:text-[56px] max-w-[740px] leading-none`}>
                            <span className={`opacity-60`}>The</span>
                            <span className={`italic text-[#7AFB79] font-georgia opacity-100`}> no code toolkit </span>
                            <span className={`opacity-60`}>for</span>
                            <span className={`italic text-[#DFFF1C] font-georgia`}> customizing & modularizing </span>
                            <span className={`opacity-60`}>automated</span>
                            <span className={`italic text-[#E93BD5] font-georgia`}> asset strategies </span>
                            <span className={`opacity-60`}>on any evm-compatible chain</span>
                        </div>
                        <div className={`smmd:max-w-[650px] smmd:pl-[200px] py-8`}>
                            {'With VaultCraft, you can easily create a cross-chain asset strategy in just a few clicks. Whether you\'re new to DeFi, a developer or a portfolio manager, VaultCraft makes it easy to create custom vaults  that fit your specific needs.'}
                        </div>
                    </Typist>
                )}
                {typingDone && (
                    <div style={{ opacity: opacity, transition: 'opacity 1000ms ease-in-out' }} className={`smmd:pl-[200px]`}>
                        <a href="https://docs.vaultcraft.io/welcome-to-vaultcraft/introduction">
                            <AppButton className={`font-bold w-full max-w-[176px]`} text={'Get Started'} />
                        </a>
                    </div>
                )}
            </div>
            <img src="/images/GetStartedSectionBg.png" className={`absolute right-0 max-w-[1300px] top-[970px]`} />
        </div>
    );
}
