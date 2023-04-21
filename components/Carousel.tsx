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
        "BlockSec is dedicated to building blockchain security infrastructure. The team is founded by elite researchers and experienced experts from both academia and industry. They’ve audited 100+ protocols and secured $12B+ asset.",
      color: "bg-[#FA5A6E]",
      image: "blocksec-logo.png"
    },
    {
      title: "Code4rena",
      content: "Code4rena is the web3 security auditing league offering on-demand audit contests in which community participants, referred to as wardens, review, audit or analyze smart contract logic in exchange for a bounty.",
      color: "bg-[#9B55FF]",
      image: "c4-logo.png"
    },
    {
      title: `Immunefi`,
      content: `Immunefi is the premier bug bounty platform for smart contracts and DeFi projects, where security researchers review code, disclose vulnerabilities, get paid, and make crypto safer.`,
      color: "bg-[#05BE64]",
      image: "immunifi-logo.png"
    },
  ];

  return (
    <div className="">
      <div className="">
        <Slider {...settings} ref={(slider) => (customSlider.current = slider)}>
          {tutorialSteps.map((step, index) => (
            <div key={step.title} className="px-2 flex flex-col justify-between">
              <div className={`w-full aspect-square flex flex-col justify-center items-center rounded-lg mb-6 ${step.color}`}>
                <img src={`/images/icons/${step.image}`} className='' />
              </div>
              <p className="text-4xl mb-4">{step.title}</p>
              <p className="text-xl">{step.content}</p>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center pt-6 gap-5">
          {tutorialSteps.map((step, index) => (
            <div
              key={`${step.title}-button`}
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