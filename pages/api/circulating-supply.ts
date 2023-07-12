import { Contract, ethers, parseUnits } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";

const provider = new ethers.JsonRpcProvider(process.env.ETH_RPC_URL, 1);

const POP_ADDRESS = "0xd0cd466b34a24fcb2f87676278af2005ca8a78c4"
const TREASURY_ADDRESS = "0x93A32401D3E1425AD7b3E118816A1B900E714d18"
const POPSTAR_ADDRESS = "0x6B1741143D3F2C4f1EdA12e19e9518489DF03e04"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  let response;
  try {
    const pop = new Contract(
      POP_ADDRESS,
      ["function balanceOf(address) external view returns (uint256)",
        "function totalSupply() external view returns (uint256)"],
      provider
    );

    const popSupply: BigInt = await pop.totalSupply();

    const treasuryBalance: BigInt = await pop.balanceOf(TREASURY_ADDRESS)
    const popstarBalance: BigInt = await pop.balanceOf(POPSTAR_ADDRESS)

    // @ts-ignore
    response = BigInt((popSupply - treasuryBalance - popstarBalance) / parseUnits("1")).toString()
  } catch (err) {
    return res.status(400).send({ error: err });
  }

  res.setHeader("Cache-Control", "s-maxage=43200");
  return res.json({ success: true, circulatingSupply: response });
}
