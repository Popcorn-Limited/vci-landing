export default function AppButton({
    text,
    onClick,
    className,
    ...rest
}: {
    text: string,
    onClick?: () => void,
    className?: string
}) {
    return (
        <button className={`
                bg-white text-black py-3 smmd:px-8 px-4 rounded ${className}
                hover:bg-[#DFFF1C] duration-[0.33s]
                active:bg-[#DFFF1C] active:opacity-90
                disabled:bg-[#D7D7D7] disabled:cursor-not-allowed disabled:text-white
        `}
                onClick={onClick}
                {...rest}
        >
            {text}
        </button>
    )
}