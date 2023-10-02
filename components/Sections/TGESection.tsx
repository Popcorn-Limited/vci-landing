import { useState, useEffect } from "react"


export default function TGESection() {
    const [timeLeft, setTimeLeft] = useState(0)

    const finalDate = new Date("2023-11-30") // 30th November 2023

    useEffect(() => {
        const redefineTimeLeft = () => {
            setTimeLeft(
                finalDate.getTime() -
                Date.UTC(
                    new Date().getFullYear(),
                    new Date().getMonth(),
                    new Date().getDate(),
                    new Date().getHours(),
                    new Date().getMinutes(),
                    new Date().getSeconds(),
                    new Date().getMilliseconds()
                )
            )
        }

        redefineTimeLeft()

        setInterval(() => redefineTimeLeft(), 1000)
    }, [])

    return (
        <div className={`py-8 bg-[url('/images/BannerSectionBg.jpeg')] bg-cover bg-center flex justify-center`}>
            <span className={`text-[18px] smmd:text-[56px] text-[#DFFF1C] uppercase font-technos text-center`}>
                {
                    'TGE 2024 ·'+
                    `${
                        Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(
                            Math.floor(timeLeft / ( 1000 * 60 * 60 * 24 ))
                        )
                    }` +
                    ':' +
                    `${
                        Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(
                            Math.floor(timeLeft / ( 1000 * 60 * 60 ) % 24)
                        )
                    }` +
                    ':' +
                    `${
                        Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(
                            Math.floor(timeLeft / ( 1000 * 60 ) % 60)
                        )
                    }` +
                    ':' +
                    `${
                        Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(
                            Math.floor(timeLeft / 1000 % 60)
                        )
                    }`
                }
            </span>
        </div>
    )
}