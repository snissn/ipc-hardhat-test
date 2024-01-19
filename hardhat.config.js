require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{

      /* running ipc-fevm on port 8545 */
      local: {
        url: "http://127.0.0.1:8545",
        accounts: [process.env.ROOT_PRIVATE_KEY, process.env.ACCOUNT1_PRIVATE_KEY || process.env.ROOT_PRIVATE_KEY]
      },

      /* runnning ganache on port 8544 */
      ganache: {
        url: "http://127.0.0.1:8544",
        accounts: [process.env.ROOT_PRIVATE_KEY, process.env.ACCOUNT1_PRIVATE_KEY || process.env.ROOT_PRIVATE_KEY]
      },
  }
};
