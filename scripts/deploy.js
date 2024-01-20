// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.parseEther("0.001");

const ethers = hre.ethers;

// Define the EIP-1559 transaction parameters
const txParams = {
    //maxFeePerGas: ethers.parseUnits('100', 'gwei'), // Example value, adjust as needed
    //maxPriorityFeePerGas: ethers.parseUnits('2', 'gwei'), // Example value, adjust as needed
    value: lockedAmount // The amount of Ether to send with the transaction
};

    var error, lock
    try {

// Deploy the contract with EIP-1559 transaction parameters
        lock = await hre.ethers.deployContract("Lock", [unlockTime], txParams);
    } catch (error) {
        console.error("An error occurred during contract deployment:", error);
        throw error
    }



  await lock.waitForDeployment();

  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
