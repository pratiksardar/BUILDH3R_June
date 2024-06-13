import { AtlasEnvironment } from "atlas-ide";
import TokenArtifact from "../artifacts/TestToken";
import * as ethers from "ethers";

// Address of the ERC20 token contract
const TOKEN_CONTRACT_ADDRESS = "0x287Ec114CECb05174769CAE0628f2aBA143Ec128"
// Wallet that will receive tokens
const RECEIVER_WALLET    = "0xF8EE592966AF83F49ec025664b525BCf907B20F5";
// Amount of tokens to mint in ETH format, e.g. 1.23
const TOKEN_AMOUNT    = "0.0009";

export async function main (atlas: AtlasEnvironment) {
  const provider = new ethers.providers.Web3Provider(atlas.provider);
  const wallet = provider.getSigner();

  // initialise token contract with address, abi and signer
  const tokenContract= new ethers.Contract(TOKEN_CONTRACT_ADDRESS, TokenArtifact.TestToken.abi, wallet);

  console.log("Minting tokens...");
  const tx = await tokenContract.mint(RECEIVER_WALLET, ethers.utils.parseEther(TOKEN_AMOUNT));
  await tx.wait();
  

  console.log("Success!");
  console.log(`The account ${RECEIVER_WALLET} now has ${await tokenContract.balanceOf(RECEIVER_WALLET)} tokens`)

}
