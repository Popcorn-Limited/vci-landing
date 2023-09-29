// @ts-ignore
import { useWindowSize } from "@uidotdev/usehooks";
import { useState, useRef, useEffect } from "react";
import RightArrowIcon from "../SVGIcons/RightArrowIcon";
import LeftArrowIcon from "../SVGIcons/LeftArrowIcon";

export default function CardsSection() {
    const cards = [
        {
            title: 'Asset Selection',
            image: 'images/cards/AssetSelection.png'
        },
        {
            title: 'Protocol Selection',
            image: 'images/cards/ProtocolSelection.png'
        },
        {
            title: 'Adapter Selection',
            image: 'images/cards/AdapterSelection.png'
        },
        {
            title: 'Choose Strategy',
            image: 'images/cards/ChooseStrategy.png'
        },
        {
            title: 'Fees Configuration',
            image: 'images/cards/FeesConfiguration.png'
        },
    ]

    const [selectedCard, setSelectedCard] = useState(0)
    const cardsRef = useRef<HTMLDivElement | null>(null)

    const {
        width: windowWidth,
    }: {
        width: number
    } = useWindowSize()

    const handleBackCard = () => {
        if (selectedCard === 0) return

        setSelectedCard(selectedCard - 1)
    }

    const handleNextCard = () => {
        if (selectedCard === cards.length - 1) return

        setSelectedCard(selectedCard + 1)
    }

    useEffect(() => {
        if (!cardsRef?.current) return

        const cardsEl = cardsRef.current

        let previousScroll = window.scrollY + cardsEl?.getBoundingClientRect().top - window.innerHeight + cardsEl?.offsetHeight
        let isCardScrollingBlocked = false
        let isScrollBlocked = false

        const handleScroll = () => {
            if (window.innerWidth < 700) return

            const topScroll = window.scrollY + cardsEl?.getBoundingClientRect().top - window.innerHeight + cardsEl?.offsetHeight
            const bottomScroll = window.scrollY + cardsEl?.getBoundingClientRect().top

            const currentScroll = window.scrollY

            if (currentScroll > topScroll && currentScroll < bottomScroll) {
                if (!isCardScrollingBlocked) {
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
            <p className={`font-georgia italic text-[#DFFF1C] font-[20px]`}>Vaultcraft SDK</p>
            <h2 className={`text-[40px] font-khTeka smmd:text-[56px] leading-none max-w-[800px] text-center`}>
                Using Vaultcraft is simple and straightforward.
            </h2>
            <div className={`smmd:grid grid-cols-5 justify-between smmd:pt-[130px] pt-[56px] self-stretch`}>
                <div className={`hidden smmd:flex flex-col gap-1 justify-center`}>
                    {cards.map((card, idx) => {
                        return (
                            <span
                                className={`flex items-center cursor-pointer text-[14px] duration-500 ${selectedCard !== idx && 'opacity-60'}`}
                                key={idx}
                                onClick={() => setSelectedCard(idx)}
                            >
                                <span className={`${selectedCard !== idx ? 'w-0' : 'w-10 && mr-2'} duration-[inherit] h-[1px] bg-white`}></span>
                                {card.title}
                            </span>
                        )
                    })}
                </div>
                <div className={`relative col-start-2 col-end-5 flex h-[420px] smmd:h-[660px]`} ref={cardsRef}>
                    {
                        cards.map((card, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className={`
                                        absolute top-0 left-[50%] w-full md:w-[512px] smmd:w-[420px] h-[420px] smmd:h-[660px]
                                        bg-[#141416] border-[1px] border-[#555] rounded-[20px] duration-500 overflow-hidden
                                        ${selectedCard === idx ? '' : `opacity-80`}
                                    `}
                                    style={{
                                        zIndex: cards.length - Math.abs(selectedCard - idx),
                                        transform: windowWidth > 700 ? `
                                            translateX(calc(-50% + ${(idx - selectedCard) * 24}px))
                                            scale(calc(1 - ${Math.abs(idx - selectedCard) * 0.05}))
                                        ` : `
                                            translateX(calc(-50% + ${(idx - selectedCard) * 100}% + ${(idx - selectedCard) * 10}px))
                                        `,
                                    }}
                                >
                                    <img src={card.image} className={`w-full`} />
                                </div>
                            )
                        })
                    }
                </div>
                <span className={`flex items-center gap-4 smmd:justify-end smmd:p-0 pt-[22px]`}>
                    <button className={`smmd:hidden`} onClick={handleBackCard}>
                        <LeftArrowIcon color={`white`} />
                    </button>
                    <span>
                        {
                            (selectedCard + 1).toLocaleString('en-US', {
                                minimumIntegerDigits: 2,
                                useGrouping: false
                            })
                        }
                        &nbsp;/&nbsp;
                        <span className={`opacity-60`}>
                            {
                                cards.length.toLocaleString('en-US', {
                                    minimumIntegerDigits: 2,
                                    useGrouping: false
                                })
                            }
                        </span>
                    </span>
                    <button className={`smmd:hidden`} onClick={handleNextCard}>
                        <RightArrowIcon color={`white`} />
                    </button>
                </span>
            </div>
        </div>
    )
}