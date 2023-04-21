import Carousel from "./Carousel";


export default function AuditSection() {

  return (
    <section className="flex flex-col items-start w-screen bg-[#F7F7F7] py-24 md:py-52 2xl:max-w-[1800px] 2xl:mx-auto px-6 smmd:px-8 md:px-12 lglaptop:px-20">
      <div className="flex-row w-full h-full gap-x-9 md:flex hidden">
        <div className="w-full flex-col flex">
          <p className="text-7xl mb-4">Audited</p>
          <p className="text-primaryDark">Our smart contract has been audited by the best in the business.</p>
        </div>
        <div className="w-full flex-col flex">
          <div className="w-[100%] pb-[100%] relative flex flex-col justify-center items-center rounded-lg bg-[#FA5A6E] mb-6">
            <img src="/images/icons/blocksec-logo.png" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
          </div>
          <p className="text-4xl mb-4">BlockSec</p>
          <p className="text-primaryDark">
            BlockSec is dedicated to building blockchain security infrastructure. The team is founded by elite researchers and experienced experts from both academia and industry. They’ve audited 100+ protocols and secured $12B+ asset.
          </p>
        </div>
        <div className="w-full flex-col flex">

          <div className="w-[100%] pb-[100%] relative flex flex-col justify-center items-center rounded-lg bg-[#9B55FF] mb-6">
            <img src="/images/icons/c4-logo.png" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
          </div>
          <p className="text-4xl mb-4">Code4rena</p>
          <p className="text-primaryDark">
            Code4rena is the web3 security auditing league offering on-demand audit contests in which community participants, referred to as wardens, review, audit or analyze smart contract logic in exchange for a bounty.
          </p>
        </div>
        <div className="w-full flex-col flex">

          <div className="w-[100%] pb-[100%] relative flex flex-col justify-center items-center rounded-lg bg-[#05BE64] mb-6">
            <img src="/images/icons/immunifi-logo.png" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
          </div>
          <p className="text-4xl mb-4">Immunefi</p>
          <p className="text-primaryDark">
            Immunefi is the premier bug bounty platform for smart contracts and DeFi projects, where security researchers review code, disclose vulnerabilities, get paid, and make crypto safer.
          </p>

        </div>
      </div>
      {/* Mobile Section */}
      <div className="md:hidden flex flex-col items-center relative w-full">
        <div className="w-full flex-col flex">
          <p className="text-7xl mb-4">Audited</p>
          <p className="text-lg mb-6">Our smart contract has been audited by the best in the business.</p>
        </div>
        <div className="w-full self-center h-full block-inline flex-col">
          <Carousel />
        </div>
      </div>
    </section>
  )
}