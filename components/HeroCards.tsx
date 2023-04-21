import Lottie from "react-lottie";

interface HeroCardProps {
  title: string;
  color: string;
  description: string;
  animation: any;
  textColor?: string;
}
export default function HeroCards({ title, description, animation, color, textColor }: HeroCardProps) {
  return (
    <div className={`w-full h-full flex flex-col justify-between cursor-normal select-none rounded-xl ${color + ' ' + textColor} p-8`}>
      <div>
        <p className="text-4xl mb-4">{title}</p>
        <p className="w-[65%] text-lg">{description}</p>
      </div>
      <div className="w-full flex flex-col justify-end items-end">
        <div className="w-48 h-48" >
          <Lottie options={{
            loop: true,
            autoplay: true,
            animationData: animation,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }} width="auto" height="auto" />
        </div>
      </div>
    </div>
  )
}