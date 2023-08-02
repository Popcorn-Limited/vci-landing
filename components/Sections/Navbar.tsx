import AppButton from "../Common/AppButton";
import { useState, useRef } from "react";
import { MobileMenu } from "@/components/Sections";

export default function Navbar() {
    const links: {
        label: string
        href: string
    }[] = [
        {
            label: 'How it works',
            href: '#HowItWorks',
        },
        {
            label: 'Contact',
            href: '#Footer',
        }
    ]

    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false)
    const linksRef = useRef<(HTMLElement | null)[]>([])
    const underLinkRef = useRef<HTMLElement | null>(null)

    const changeUnderLinkPosition = (idx: number) => {
        const underLink = underLinkRef.current
        const link = linksRef.current[idx]

        if (!underLink || !link) return

        const translateCount = linksRef.current.reduce((acc, cur, curIdx) => {
            if (curIdx < idx && cur?.offsetWidth) {
                return acc + cur.offsetWidth
            }

            if (curIdx === idx && cur?.offsetWidth) {
                return acc + cur.offsetWidth / 2
            }

            return acc
        }, 0)

        underLinkRef.current?.style.setProperty('visibility', 'visible')
        underLinkRef.current?.style.setProperty('transform', `translateX(${Math.round(translateCount)}px) rotate(${(idx) * 90}deg)`)
    }

    return (
        <>
            <div className={`p-8 flex justify-between text-white items-center z-10`}>
                <img className={`h-10 w-10`} src={`images/icons/popLogoWhite.svg`} alt="logo"/>
                <div className={`flex gap-4 items-stretch relative`}>
                    <span className={`hidden smmd:block invisible absolute duration-[0.75s] w-1.5 h-1.5 rounded-[1px] bottom-0 bg-[#DFFF1C]`} ref={underLinkRef} />
                    <div className={`hidden smmd:flex duration-[0.25s] text-white hover:text-gray-400`}>
                        {links.map((link, idx) => {
                            return (
                                <a
                                    href={link.href}
                                    key={idx}
                                    ref={el => linksRef.current[idx] = el}
                                    className={`flex items-center px-2 font-medium duration-[inherit] hover:text-white`}
                                    onMouseEnter={() => changeUnderLinkPosition(idx)}
                                >
                                    {link.label}
                                </a>
                            )
                        })}
                    </div>
                    <a href="https://google.com/">
                        <AppButton className={`font-bold`} text={`Launch APP`} />
                    </a>
                    <button className={`smmd:hidden relative w-12 h-1 rounded-[24px] my-auto bg-white
                    before:w-full before:h-1 before:duration-[0.25s] before:absolute before:bottom-3 before:left-0 before:rounded-[24px] before:bg-white
                    after:w-full after:h-1 after:duration-[0.25s] after:absolute after:top-3 after:left-0 after:rounded-[24px] after:bg-white`}
                            onClick={() => setIsMobileMenuOpened(true)}
                    />
                </div>
            </div>
            <MobileMenu isOpened={isMobileMenuOpened} closeMenu={() => setIsMobileMenuOpened(false)} links={links} />
        </>
    )
}