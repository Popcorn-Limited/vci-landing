import {useState, useRef, useEffect} from "react";

export function CardsSection() {
    const cards = [
        {
            title: 'Asset Selection',
            description: 'The denomination asset is the asset in which depositors deposit into your vault and which the vault’s share price and the performance are measured',
            image: 'images/cards/AssetSelection.png'
        },
        {
            title: 'Protocol Selection',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ut labore et dolore magna.',
            image: 'images/cards/ProtocolSelection.png'
        },
        {
            title: 'Adapter Selection',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ut labore et dolore magna.',
            image: 'images/cards/AdapterSelection.png'
        },
        {
            title: 'Choose Strategy',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ut labore et dolore magna.',
            image: 'images/cards/ChooseStrategy.png'
        },
        {
            title: 'Fees Configuration',
            description: 'Vault managers can charge several types of fees, all of which are paid out in shares of the vault.  Fees can be changed at any time after fund creation',
            image: 'images/cards/FeesConfiguration.png'
        },
    ]

    const [selectedCard, setSelectedCard] = useState(0)
    const cardsRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        console.log('useEffect')
        if (!cardsRef?.current) return

        const cardsEl = cardsRef.current
        const topScroll = window.pageYOffset + cardsEl?.getBoundingClientRect().top - ((window.innerHeight - cardsEl?.offsetHeight) / 2)
        const bottomScroll = window.pageYOffset + cardsEl?.getBoundingClientRect().top - ((window.innerHeight - cardsEl?.offsetHeight) / 4)

        let previousScroll = topScroll
        let isCardScrollingBlocked = false
        let isScrollBlocked = false

        const handleScroll = (e: Event) => {
            const currentScroll = window.scrollY
            console.log(currentScroll, topScroll, bottomScroll, isScrollBlocked, topScroll + window.innerHeight / 4)

            if (currentScroll < topScroll) {
                setSelectedCard(0)
            }

            else if (currentScroll > bottomScroll) {
                setSelectedCard(cards.length - 1)
            }

            else {
                if(!isCardScrollingBlocked) {
                    isCardScrollingBlocked = true

                    if (currentScroll > previousScroll) {
                        setSelectedCard(
                            prev => {
                                if (prev + 1 > cards.length - 1) {
                                    isScrollBlocked = false
                                    return prev
                                } else {
                                    isScrollBlocked = true
                                    return prev + 1
                                }
                            }
                        )
                    } else {
                        setSelectedCard(prev => {
                            if (prev - 1 < 0) {
                                isScrollBlocked = false
                                return prev
                            } else {
                                isScrollBlocked = true
                                return prev - 1
                            }
                        })
                    }

                    setTimeout(() => {
                        isCardScrollingBlocked = false
                    }, 330)
                }

                if (isScrollBlocked) scrollTo(window.scrollX, previousScroll)
                else previousScroll = currentScroll
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`flex flex-col px-8 py-40 items-center`}>
            <span className={`font-georgia italic text-[20px] text-[#DFFF1C] leading-none`}>This is how it works</span>
            <span className={`pt-4 max-w-[660px] text-[56px] text-center leading-none`}>Using Vaultcraft is simple and straightforward.</span>
            <div className={`grid grid-cols-5 justify-between pt-[130px] self-stretch`}>
                <div className={`flex flex-col gap-1 justify-center`}>
                    {cards.map((card, idx) => {
                        return (
                            <span
                                className={`flex items-center cursor-pointer text-[14px] duration-500 ${selectedCard !== idx && 'opacity-60' }`}
                                key={idx}
                                onClick={() => setSelectedCard(idx)}
                            >
                                <span className={`${selectedCard !== idx ? 'w-0' : 'w-10 && mr-2'} duration-[inherit] h-[1px] bg-white`}></span>
                                {card.title}
                            </span>
                        )
                    })}
                </div>
                <div className={`relative col-start-2 col-end-5 flex h-[660px]`} ref={cardsRef}>
                    {
                        cards.map((card, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className={`
                                        p-8 absolute top-0 left-[50%] flex flex-col gap-8 md:w-[512px] smmd:w-[420px] h-[660px]
                                        bg-[#141416] border-[1px] border-[#555] rounded-[20px] duration-500 overflow-hidden
                                        ${selectedCard === idx ? '' : `opacity-80`}
                                    `}
                                    style={{
                                        zIndex: cards.length - Math.abs(selectedCard - idx),
                                        transform: `
                                            translateX(calc(-50% + ${(idx - selectedCard) * 24}px))
                                            scale(calc(1 - ${Math.abs(idx - selectedCard) * 0.05}))
                                        `,
                                    }}
                                >
                                    <span className={`text-[32px]`}>{card.title}</span>
                                    <span>{card.description}</span>
                                    <img src={card.image} className={`w-full`} />
                                </div>
                            )
                        })
                    }
                </div>
                <span className={`flex items-center justify-end`}>
                    {
                        (selectedCard + 1).toLocaleString('en-US', {
                            minimumIntegerDigits: 2,
                            useGrouping: false
                        })
                    }&nbsp;/&nbsp;<span className={`opacity-60`}>
                    {
                        cards.length.toLocaleString('en-US', {
                            minimumIntegerDigits: 2,
                            useGrouping: false
                        })
                    }
                    </span>
                </span>
            </div>
        </div>
    )
}