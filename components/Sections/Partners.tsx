import Slider from 'react-slick'

export default function Partners() {
    const partners = [
        {
            name: 'Immunefi',
            description: 'Immunefi is the premier bug bounty platform for smart contracts and DeFi projects, where security researchers review code, disclose vulnerabilities, get paid, and make crypto safer.',
            whiteLogo: '/images/icons/immunefi-white.png',
            blackLogo: '/images/icons/immunefi-black.png',
        },
        {
            name: 'BlockSec',
            description: 'BlockSec is dedicated to building blockchain security infrastructure. The team is founded by elite researchers and experienced experts from both academia and industry. They’ve audited 100+ protocols and secured $12B+ asset.',
            whiteLogo: '/images/icons/blocksec-white.png',
            blackLogo: '/images/icons/blocksec-black.png',
        },
        {
            name: 'Code4rena',
            description: 'Code4rena is a platform for competitive smart contract development. They host tournaments where developers compete to build the best smart contract implementation of a given specification.',
            whiteLogo: '/images/icons/code4rena-white.png',
            blackLogo: '/images/icons/code4rena-black.png',
        }
    ]

    const slickSettings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className={`pt-[120px] pb-[200px] smmd:px-[30px] flex gap-8 flex-col smmd:flex-row`}>
            <div className={`flex flex-col gap-4 min-w-[275px] px-[30px] smmd:p-0`}>
                <span className={`text-[56px] leading-none`}>Audited</span>
                <span className={`opacity-60 leading-normal`}>Our smart contract has been audited by the best in the business.</span>
            </div>
            <div className={`duration-500 hidden smmd:grid grid-cols-3 gap-8 grow`}>
                {partners.map((partner, idx) => (
                    <div className={`duration-[inherit] group flex flex-col gap-6 grow`} key={idx}>
                        <div
                            className={`
                                flex justify-center px-[15%] items-center rounded-[8px] after:block after:pb-[130%] duration-[inherit]
                                bg-[#141416] group-hover:bg-[#DFFF1C]
                            `}>
                            <img src={partner.whiteLogo} className={`w-full group-hover:hidden`} alt="logo" />
                            <img src={partner.blackLogo} className={`w-full hidden group-hover:block`} alt="logo"/>
                        </div>
                        <div className={`p-2 flex flex-col gap-4 opacity-0 group-hover:opacity-100 duration-[inherit]`}>
                            <span className={`text-[#DFFF1C] text-[24px]`}>
                                {partner.name}
                            </span>
                            <span className={`text-[14px]`}>
                                {partner.description}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <Slider {...slickSettings} className={`smmd:hidden`}>
                {partners.map((partner, idx) => (
                    <div key={idx}>
                        <div className={`flex flex-col gap-6 mx-[1.5rem]`}>
                            <div className={`bg-[#DFFF1C] flex justify-center px-[15%] items-center rounded-[8px] after:block after:pb-[130%]`}>
                                <img src={partner.blackLogo} className={`w-full`} alt="logo"/>
                            </div>
                            <div className={`p-2 flex flex-col gap-4`}>
                            <span className={`text-[#DFFF1C] text-[24px]`}>
                                {partner.name}
                            </span>
                                <span className={`text-[14px]`}>
                                {partner.description}
                            </span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}