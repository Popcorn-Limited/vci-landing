import { useState, useEffect, useRef } from "react";

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default function Loader({
    isLoading,
    endLoadingAnimation
}: {
    isLoading: boolean
    endLoadingAnimation: () => void
}) {
    const [isShown, setIsShown] = useState(true)
    const [numberArr, setNumberArr] = useState([0, 0, 0])

    async function addLoadingNumber() {
        const number = numberArr[0] * 100 + numberArr[1] * 10 + numberArr[2] + 1

        await sleep(20)

        if(number <= 100) {
            setNumberArr([
                Math.floor(number / 100),
                Math.floor(number / 10) % 10,
                number % 10
            ])
        } else {
            await sleep(750)
            setIsShown(false)
            await sleep(1000)
            endLoadingAnimation()
        }
    }

    useEffect(() => {
        if (isLoading) setNumberArr([0, 0, 1])
    }, [isLoading])

    useEffect(() => {
        addLoadingNumber()
    }, [numberArr])

    return (
        <div className={`bg-[#DFFF1C] z-20 overflow-hidden w-[100vw] fixed flex ${isShown ? 'h-[100%]' : 'duration-[1s] h-0'}`}>
            <span className={`smmd:p-[72px] flex items-end`}>
                {numberArr.map((number, idx) => {
                    return (
                        <div
                            className={`flex flex-col overflow-hidden leading-none text-[180px] smmd:text-[200px] h-[180px] smmd:h-[200px]`}
                            key={idx}
                        >
                            {
                                Array.from(Array(10).keys()).map((item, itemIdx) => {
                                    return (
                                        <span
                                            key={itemIdx}
                                            style={{
                                                transform: `translateY(-${number}00%)`,
                                                transitionDuration: `${(numberArr.length - idx) ** 2 / 10}s`
                                            }}
                                        >
                                            {item % 10}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    )
                })}
            </span>
        </div>
    )
}