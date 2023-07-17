export default function AppButton({
    text,
    onClick,
    className,
}: {
    text: string,
    onClick?: () => void,
    className?: string
}) {
    return (
        <button className={`bg-white text-black py-3 smmd:px-8 px-4 rounded ${className}`} onClick={onClick}>
            {text}
        </button>
    )
}