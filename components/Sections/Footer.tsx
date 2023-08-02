import TwitterIcon from "../SVGIcons/TwitterIcon";
import DiscordIcon from "../SVGIcons/DiscordIcon";
import TelegramIcon from "../SVGIcons/TelegramIcon";
import UpArrowIcon from "../SVGIcons/UpArrowIcon";

export default function Footer() {
    const links = [
        {
            label: 'dApp',
            href: 'https://google.com/',
        },
        {
            label: 'How it works',
            href: 'https://google.com/'
        },
        {
            label: 'Contact',
            href: 'https://google.com/'
        }
    ]

    const scrollToTop = () => scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    return (
        <div className={`flex flex-col smmd:gap-14`}>
            <div className={`flex flex-col gap-2 font-size px-8 py-4`}>
                <span>
                    <span className={`font-bold`}>VaultCraft</span>
                    <span>&nbsp;by</span>
                </span>
                <span className={`flex gap-2 items-center`}>
                    <img className={`h-5 w-5`} src={`images/icons/popLogoWhite.svg`} alt="logo" />
                    <span>Popcorn</span>
                </span>
            </div>
            <div className={`relative`}>
                <video
                    className={`absolute w-full object-cover h-[700px] smmd:h-[560px]`}
                    src="videos/FooterVideo.mp4"
                    loop muted autoPlay
                />
                <div className={`
                    bg-gradient-to-t from-transparent via-[rgba(0,0,0,0.5), rgba(0,0,0,0.7)] to-black
                    h-10 relative h-[700px] smmd:h-[560px] px-8 flex flex-col
                `}>
                    <div className={`flex justify-between grow smmd:flex-row flex-col`}>
                        <div className={`flex flex-col gap-4 smmd:pt-[56px]`}>
                            <span className={`text-[40px] smmd:text-[56px]`}>Get in Touch</span>
                            <span className={`text-[14px] smmd:text-[18px] w-full smmd:max-w-[450px]`}>
                                {`We'd love to hear from you! Whether you're a developer, investor, or simply curious about our platform, drop us a line and we'll be happy to connect.`}
                            </span>
                            <div className={`flex gap-2`}>
                                <a className={`p-3 bg-[#141416] text-[#D7D7D7] hover:text-[#DFFF1C] duration-[0.25s] opacity-80 rounded-[50%]`} href="https://google.com/">
                                    <TwitterIcon color={'currentColor'} size={'24px'} />
                                </a>
                                <a className={`p-3 bg-[#141416] text-[#D7D7D7] hover:text-[#DFFF1C] duration-[0.25s] opacity-80 rounded-[50%]`} href="https://google.com/">
                                    <DiscordIcon color={'currentColor'} size={'24px'} />
                                </a>
                                <a className={`p-3 bg-[#141416] text-[#D7D7D7] hover:text-[#DFFF1C] duration-[0.25s] opacity-80 rounded-[50%]`} href="https://google.com/">
                                    <TelegramIcon color={'currentColor'} size={'24px'} />
                                </a>
                            </div>
                        </div>
                        <div className={`flex flex-col gap-2 smmd:pt-[105px] self-end smmd:self-auto smmd:pb-0 pb-[40px]`}>
                            <span className={`text-[#D7D7D7] pb-4`}>Vaultcraft</span>
                            {links.map((link, idx) => (
                                <a key={idx} href={link.href} className={`text-[14px] hover:text-[#DFFF1C] font-medium duration-[0.25s]`}>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={`grid smmd:grid-cols-3 grid-cols-2 items-center my-4 font-medium text-[#D7D7D7] text-[14px]`}>
                        <div className={`col-span-full bg-[#D7D7D7] h-[1px] w-full my-4`}></div>
                        <span>Vaultcraft by Popcorn 2023</span>
                        <div className={`flex gap-6 justify-center row-start-1 smmd:row-start-auto col-span-full smmd:col-span-1`}>
                            <a href="https://google.com/" className={`hover:text-[#DFFF1C] duration-[0.25s]`}>Terms of Use</a>
                            <a href="https://google.com/" className={`hover:text-[#DFFF1C] duration-[0.25s]`}>Privacy Policy</a>
                        </div>
                        <div className={`flex justify-end`}>
                            <button className={`flex gap-3 items-center`} type="button" onClick={scrollToTop}>
                                <UpArrowIcon className={`text-[#555555] bg-[#D7D7D7] rounded-[50%]`} />
                                <span>Back to Top</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}