import Link from "next/link";
import SecondaryActionButton from "./Common/SecondaryActionButton";
import FaqCard from "./FAQCard";
import DiscordIcon from "./SVGIcons/DiscordIcon";
import TwitterIcon from "./SVGIcons/TwitterIcon";

export default function FaqSection() {

  return (
    <section className="bg-[#F7F7F7] smmd:py-36 py-18 flex flex-col w-screen 2xl:max-w-[1800px] 2xl:mx-auto px-6 smmd:px-8 md:px-12 lglaptop:px-20">
        <div className="flex smmd:flex-row flex-col-reverse w-full h-fit">
          <div className="flex-col smmd:w-1/2 w-full mt-18 smmd:mt-0">
            <p className="text-lg mb-2">Frequently Asked Questions</p>
            <p className="text-4xl smmd:text-6xl leading-none">Empower Your Crypto: Create Positive Impact</p>
          </div>

          <div className="flex-col flex smmd:w-1/2 w-full items-end">

            {/* <Link
              href="https://discord.gg/w9zeRTSZsq"
              passHref
              className="cursor-pointer flex flex-row bg-[#FEE25D] py-3 items-center justify-center w-full smmd:w-[70%] rounded-[4px]">
              <p className="">Join us on discord </p>
              <div className="h-fit mt-2 ml-2">
                <DiscordIcon color="black" size="24" />
              </div>
            </Link> */}

            <div className="flex flex-col mt-18 w-full smmd:w-[70%]">
              <p className="text-[#6B7280]">Be part of our community</p>
              <div className="flex flex-row w-full border-x-0 border-y-customLightGray border-y-2 mt-2">
                <Link
                  href="https://twitter.com/Popcorn_DAO"
                  passHref
                  className="flex flex-row items-center w-full justify-end">
                  <div className="flex flex-row items-center w-3/4">
                    <p className="text-[#645F4B] py-2 w-fit leading-7 font-bold mr-4">Follow us on Twitter</p>
                    <TwitterIcon color="#645F4B" size="24" />
                  </div>
                  <div className="w-1/4">
                    <SecondaryActionButton label="" customArrowColor="645F4B" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col grow w-full mt-20 smmd:mt-30 divide-y divide-primaryLight">
          <FaqCard
            title="What is Popcorn?"
            description="Popcorn is a Regenerative Finance yield-optimizing protocol with soul, where protocol fees fund public goods and PopcornDAO's operations. PopcornDAO is a decentralized autonomous organization that is responsible for the software development of all smart contracts offered on the dApp (app.pop.network)."
          />
          <FaqCard
            title="How does Popcorn work?"
            description="Users can deposit their crypto into Popcorn's yield-generating products, specifically vaults and staking products, to earn competitive yield while automatically funding public goods at no additional cost to the user. A portion of protocol fees as well as all yield generated with vaults for good are used to fund community determined nonprofits and social impact organizations on Gitcoin."
          />
          <FaqCard
            title="What kind of positive global impact can I make with Popcorn?"
            description="Just by depositing your crypto into Popcorn's vaults and staking products, you are creating positive global impact, for free! There is no other non-custodial, DeFi platform where you can park your crypto in yield-generating products, keep all of the competitive yields that you generate, and donate protocol fees that you pay to philanthropy at the same time. Why do DeFi if you're not doing DeFi for good?"
          />
        </div>
    </section>
  )
}