import React, { useRef, useState } from "react";
import Slider from "react-slick";

let inactiveDot = "bg-black bg-opacity-25";
let activeDot = "bg-black";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const customSlider = useRef(null);

  const gotoSlide = (id) => {
    setCurrentSlide(id);
    customSlider.current.slickGoTo(id);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    easing: "easeInOut",
    pauseOnHover: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };
  const tutorialSteps: Array<{ title: string; content: string, color: string, image: string }> = [
    {
      title: "BlockSec",
      content:
        "Zokyo is an end-to-end security resource that provides distinguishable security auditing and penetration testing services alongside prominent vulnerability assessments.",
      color: "bg-[#FA5A6E]",
      image:"blocksec-logo.png"
    },
    {
      title: "Code4rena",
      content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      color: "bg-[#9B55FF]",
      image:"c4-logo.png"
    },
    {
      title: `Immunefi`,
      content: `Immunefi is the leading bug bounty platform for Web3.`,
      color: "bg-[#05BE64]",
      image:"immunifi-logo.png"
    },
  ];

  return (
    <div className="">
      <div className="">
        <Slider {...settings} ref={(slider) => (customSlider.current = slider)}>
          {tutorialSteps.map((step, index) => (
            <div>
              <div className="px-2 flex flex-col justify-between">
                <div>
                  <div className={`w-full aspect-square flex flex-col justify-center items-center rounded-lg mb-6 ${step.color}`}>
                    <img src={`/images/icons/${step.image}`} className='' />
                  </div>
                  <p className="text-4xl mb-4">{step.title}</p>
                  <p className="text-xl">{step.content}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center pt-6 gap-5">
          {tutorialSteps.map((steps, index) => (
            <div
              className={`h-5 w-5 rounded-full mx-1 border-2 border-black ${currentSlide === index ? "bg-black" : ""} `}
              onClick={() => gotoSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Carousel;