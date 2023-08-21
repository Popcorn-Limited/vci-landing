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
export function typeAnimate(e: HTMLElement | null, {
    speed = 25,
    afterAnimation,
}: {
    speed?: number
    afterAnimation?: () => void
}) {
    if (!e || !e.parentElement) return

    let isShown = false
    let isInTag = false
    const text = unescapeHTML(e.innerHTML).split('')

    e.style.setProperty('visibility', 'hidden')
    const observer = new IntersectionObserver(async (entries) => {
        if (isShown || entries[0].intersectionRatio === 0) return

        isShown = true
        const newEl = document.createElement(e.tagName)

        newEl.className = e.className
        newEl.style.setProperty('opacity', '100')
        newEl.style.setProperty('position', 'absolute')
        newEl.style.setProperty('top', `${e.getBoundingClientRect().top + window.pageYOffset}px`)

        e.parentElement?.insertBefore(newEl, e.nextSibling)

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
            await sleep(speed)
        }

        // animation is ended
        e?.remove()
        newEl.style.setProperty('position', 'static')

        if (afterAnimation) {
            afterAnimation()
        }
    })

    observer.observe(e)
}