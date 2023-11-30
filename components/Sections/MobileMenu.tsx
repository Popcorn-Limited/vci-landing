import TwitterIcon from "../SVGIcons/TwitterIcon";

export default function MobileMenu({
    isOpened,
    links,
    closeMenu
}: {
    isOpened: boolean
    links?: {
        label: string
        href: string
    }[]
    closeMenu: () => void
}) {
    return (
        <div className={`smmd:hidden fixed w-full ${isOpened ? 'h-full' : 'h-0'} bg-[#DFFF1C] z-20 duration-[0.5s] text-black overflow-hidden`}>
            <div className={`flex flex-col p-8 h-full`}>
                <div className={`flex w-full justify-between pb-10`}>
                    <img className={`w-10 h-10`} src="images/icons/popLogo.svg" alt="logo" />
                    <button onClick={closeMenu}>
                        <img src="images/icons/x-icon.svg" alt="x" />
                    </button>
                </div>
                <div className={`flex flex-col grow justify-between`}>
                    <div className={`flex flex-col gap-10`}>
                        {links?.map((link, idx) => {
                            return (
                                <a key={idx} href={link.href} onClick={closeMenu} className={`text-[48px] leading-none`}>
                                    {link.label}
                                </a>
                            )
                        })}
                    </div>
                    <a href="https://app.vaultcraft.io/">
                        <button className={`bg-black text-[#DFFF1C] px-8 py-2.5 rounded-[4px] font-bold`}>Launch APP</button>
                    </a>
                    <div className={`flex flex-col gap-10`}>
                        <div className={`flex justify-between`}>
                            <div className={`flex flex-col gap-4`}>
                                <span className="font-bold">Links</span>
                                <a className={`text-[#645F4B]`} href="https://pop.network/">Popcorn</a>
                            </div>
                            <div className={`flex flex-col`}>
                                <span>
                                    <span className={`font-bold`}>VaultCraft </span>
                                    by
                                </span>
                                <span className={`flex gap-1.5 items-center`}>
                                    <img className={`w-4 h-4`} src="images/icons/popLogo.svg" alt="logo" />
                                    Popcorn
                                </span>
                            </div>
                        </div>
                        <div className={`flex gap-2`}>
                            <a className={`p-4 bg-[#141416] opacity-80 rounded-[50%]`} href="https://twitter.com/VaultCraft_io/">
                                <TwitterIcon color={'#D7D7D7'} size={'24px'} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}