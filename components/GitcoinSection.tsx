import { useState, useEffect } from "react";

export default function GitcoinSection() {

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
    <section className="relative flex flex-col justify-start w-screen h-screen max-h-[800px] 2xl:max-w-[1800px] 2xl:mx-auto -z-10">
      <div style={{ background: 'linear-gradient(270deg, rgba(0, 0, 0, 5e-05) 50%, rgba(0, 0, 0, 0.25) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0.09%, rgba(0, 0, 0, 5e-05) 100%), linear-gradient(360deg, rgba(0, 0, 0, 0.7) 0.04%, rgba(0, 0, 0, 0.0001) 42.85%), url(/images/background-rectangle.png)', 'WebkitBackgroundSize': 'cover' }} className="relative top-0 left-0 flex flex-col justify-between w-screen 2xl:max-w-[1800px] 2xl:mx-auto grow pb-0 bg-cover">

        <div className="w-full grow flex-col flex justify-start items-start px-6 smmd:px-8 md:px-12 lglaptop:px-20">
          <div id="second-slide-element" className={`transition-transform mt-[80px] smmd:w-[60vw] w-full 2xl:max-w-[1400px] duration-[900ms] ${isVisible ? 'smmd:translate-x-0' : 'smmd:-translate-x-full'}`}>
            <h1 className="mb-6 leading-[60px] text-white smmd:leading-[72px] font-normal min-h-[80px] text-left text-4xl smmd:text-8xl lglaptop:text-[96px] lglaptop:leading-[90px] smmd:mt-0 ">
              Build a better future with your Digital Assets
            </h1>
          </div>
        </div>


        <div className="w-full grow flex flex-col justify-end items-end mb-10 px-6 smmd:px-8 md:px-12 lglaptop:px-20">
          <div className={`${isVisible ? 'smmd:-translate-x-0' : 'smmd:translate-x-full'} shrink transition-transform smmd:w-[40vw] w-full 2xl:max-w-[800px] delay-[200ms] duration-[800ms] `} >
            <p className="text-white text-right text-lg">
              At Popcorn, we&#39;re not just focused on generating returns with our DeFi products, but also on making a difference. That&#39;s why we&#39;ve partnered with Gitcoin to donate protocol fees, and with Vaults for Good the yield in its entirety, to nonprofits and social impact organizations.
            </p>

            <div className="flex flex-col mt-20 justify-end items-end">
              <p className="text-white text-sm mb-4 uppercase">Organizations Supported</p>
              <div className="flex-row items-center w-fit px-2 gap-x-4">
                <img src="/images/icons/GITCOIN.svg" className='h-12' />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}