import { useState, useRef, useEffect } from "react";
import RightArrowIcon from "../SVGIcons/RightArrowIcon";
import LeftArrowIcon from "../SVGIcons/LeftArrowIcon";
import { useWindowSize } from "@uidotdev/usehooks";

export default function CardsSection() {
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
            <div className={`smmd:grid grid-cols-5 justify-between smmd:pt-[130px] pt-[56px] self-stretch`}>
                <div className={`hidden smmd:flex flex-col gap-1 justify-center`}>
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
                <div className={`relative col-start-2 col-end-5 flex h-[420px] smmd:h-[660px]`} ref={cardsRef}>
                    {
                        cards.map((card, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className={`
                                        absolute top-0 left-[50%] flex flex-col gap-8 w-full md:w-[512px] smmd:w-[420px] h-[420px] smmd:h-[660px]
                                        bg-[#141416] rounded-[20px] duration-500 overflow-hidden
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