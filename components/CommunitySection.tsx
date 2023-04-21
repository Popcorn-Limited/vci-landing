import { useState, useEffect } from "react";
import Link from "next/link";

export default function CommunitySection() {

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('second-slide-element');
    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop + 300 < windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="flex w-screen h-full py-10 bg-[#FFE650] rounded-t-xl z-10 -mt-2 2xl:max-w-[1800px] 2xl:mx-auto">
      <div className="flex-col flex w-full gap-y-4">
        <div className="flex flex-col md:flex-row w-full md:h-[50%] pl-6 smmd:pl-8 md:pl-12 lglaptop:pl-20">
          <div className="flex flex-col md:w-[40%]">
            <p className="text-black text-3xl"><b>Governed by</b></p>
            <p className="text-black text-3xl -mt-2">PopcornDAO</p>
            <p className="text-lg mt-6 mb-4 md:w-[70%] w-[90%]">
              Popcorn is governed by POP stakers who use their vlPOP to vote on  important issues to help evolve the protocol and the DAO.
            </p>
            <Link
              href="https://forum.pop.network"
              className="bg-white rounded-3xl text-black px-6 py-3 w-fit font-medium cursor-pointer"
            >
              Governance Forum
            </Link>
          </div>
          <div className="w-fit hidden md:flex flex-row gap-x-3 justify-end xl:w-[60%]">
            <img src="/images/face1.svg" className="h-auto w-[19vw]" />
            <img src="/images/face2.svg" className="h-auto w-[19vw]" />
            <img src="/images/face3.svg" className="h-auto w-[19vw]" />
          </div>
        </div>

        <div className="flex flex-row w-full md:h-[50%] md:gap-x-3 gap-x-[1.4vw] relative md:ml-0 mt-10 md:mt-0">
          <img src="/images/face4.svg" className="w-[24vw] md:w-[19vw]" />
          <img src="/images/face5.svg" className="w-[24vw] md:w-[19vw]" />
          <img src="/images/face6.svg" className="w-[24vw] md:w-[19vw]" />
          <img src="/images/face7.svg" className="w-[24vw] md:w-[19vw]" />
          <div className="h-full w-[19vw] hidden md:flex flex-col justify-end items-end">
            <img src="/images/icons/popLogo.svg" className="w-12 h-12 mr-8 xl:mr-20" />
          </div>
        </div>
        <div className="w-full md:hidden flex flex-row gap-x-3 justify-start ">
          <img src="/images/face1.svg" className="h-auto w-[24vw]" />
          <img src="/images/face2.svg" className="h-auto w-[24vw]" />
          <img src="/images/face3.svg" className="h-auto w-[24vw]" />
          <div className="h-full w-[24vw] md:hidden flex flex-col justify-end items-center">
            <img src="/images/icons/popLogo.svg" className="w-12 h-12" />
          </div>
        </div>
      </div>
    </section>
  )
}