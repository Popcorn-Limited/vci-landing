import AppButton from "./Common/AppButton";
import { useRef, useEffect } from "react";

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function unescapeHTML(html: string) {
    html = html.replace(/&lt;/g, '<')
    html = html.replace(/&gt;/g, '>')
    html = html.replace(/&amp;/g, '&')
    html = html.replace(/&quot;/g, '"')
    html = html.replace(/&apos;/g, "'")

    return html
}

// doesn't work if there are nested tags
function typeAnimate(e: HTMLElement | null) {
    if (!e || !e.parentElement) return

    let isShown = false
    let isInTag = false
    const text = unescapeHTML(e.innerHTML).split('')

    e.style.setProperty('visibility', 'hidden')
    const observer = new IntersectionObserver(async (entries) => {
        if (isShown || entries[0].intersectionRatio === 0) return

        isShown = true
        const newEl = document.createElement(e.tagName)

        newEl.style.setProperty('position', 'absolute')
        newEl.className = e.className

        e.parentElement?.append(newEl)

        while (text.length) {
            if (!isInTag && text[0] !== '<') {
                newEl.innerHTML += text.shift()
            }

            else if (!isInTag && text[0] === '<') {
                isInTag = true

                // completing tag with attrs
                // @ts-ignore
                while (text[0] !== '>' && text.length) {
                    newEl.innerHTML += text.shift()
                }

                // we have '>' as first el of arr now, so we have to complete tag
                newEl.innerHTML += text.shift()

                // first letter in tag
                if(text[0] !== '<') {
                    newEl.innerHTML += text.shift()
                }

                let tagEndIdx = text.findIndex(el => el === '<')

                for(; text[tagEndIdx] !== '>'; tagEndIdx++) {
                    newEl.innerHTML += text[tagEndIdx]
                }

                // add closing tag
                newEl.innerHTML += text[tagEndIdx]
            }

            else if (isInTag && text[0] !== '<') {
                const a = text.shift()
                const idx = newEl.innerHTML.lastIndexOf('<')
                newEl.innerHTML = newEl.innerHTML.slice(0, idx) + a + newEl.innerHTML.slice(idx)
            }

            else if (isInTag && text[0] === '<') {
                isInTag = false

                // @ts-ignore
                while(text[0] !== '>' && text.length) {
                    text.shift()
                }

                // we have end of tag in text, so we have to delete it
                text.shift()
            }

            newEl.innerHTML = unescapeHTML(newEl.innerHTML)
            await sleep(25)
        }
    })

    observer.observe(e)
}

export default function GetStartedSection() {
    const titleRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (titleRef.current) {
            typeAnimate(titleRef.current)
        }
    }, [])

    return (
        <div className={`min-h-[1100px] bg-gradient-to-b from-black to-[#030E22] pt-60 smmd:pl-8 smmd:pr-0 flex flex-col smmd:flex-row smmd:gap-5 gap-16`}>
            <div className={`flex flex-col smmd:pb-5 px-6`}>
                <div className={`text-[40px] smmd:text-[56px] max-w-[760px] max-h-[300px] leading-none`} ref={titleRef}>
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