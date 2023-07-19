import AppButton from "./Common/AppButton";

export default function GetStartedSection() {
    return (
        <div className={`min-h-[1100px] bg-gradient-to-b from-black to-[#030E22] pt-60 smmd:pl-8 smmd:pr-0 flex flex-col smmd:flex-row smmd:gap-5 gap-16`}>
            <div className={`flex flex-col smmd:pb-5 px-6`}>
                <div className={`text-[40px] smmd:text-[56px] max-w-[760px] leading-none`}>
                    <span className={`opacity-60`}>The</span>
                    <span className={`italic text-[#7AFB79] font-georgia opacity-100`}> no code toolkit </span>
                    <span className={`opacity-60`}>for</span>
                    <span className={`italic text-[#DFFF1C] font-georgia`}> customizing & modularizing </span>
                    <span className={`opacity-60`}>automated</span>
                    <span className={`italic text-[#E93BD5] font-georgia`}> asset strategies </span>
                    <span className={`opacity-60`}>on any evm-compatible chain</span>
                </div>
                <span className={`smmd:max-w-[650px] smmd:pl-[200px] py-8`}>
                    {'With VaultCraft, you can easily create a sophisticated asset strategy in just a few clicks. Whether you\'re new to DeFi, a developer or an experienced investor, VaultCraft makes it easy to create custom asset strategies that fit your specific needs.'}
                </span>
                <a className={`smmd:pl-[200px]`} href="https://google.com/">
                    <AppButton className={`font-bold w-full max-w-[176px]`} text={'Get Started'} />
                </a>
            </div>
            <video src="videos/GetStartedVideo.mov" className={`self-end w-full smmd:max-w-[600px] h-[550px] object-cover`} loop muted autoPlay />
        </div>
    )
}