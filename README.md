
# IPC bug

please install with `npm install` and not `yarn`

To reproduce, set up IPC on port 8545, clone this repo, update the private keys in hardhat.config.js to match your credentials, and run the following:

```
mikeseiler@Mikes-MacBook-Air hardhat-init % npx hardhat --network local run scripts/deploy.js
ProviderError: unexpected transaction type
    at HttpProvider.request (/Users/mikeseiler/dev/snissn/hardhat-init/node_modules/hardhat/src/internal/core/providers/http.ts:88:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at HardhatEthersSigner.sendTransaction (/Users/mikeseiler/dev/snissn/hardhat-init/node_modules/@nomicfoundation/hardhat-ethers/src/signers.ts:125:18)
    at ContractFactory.deploy (/Users/mikeseiler/dev/snissn/hardhat-init/node_modules/ethers/src.ts/contract/factory.ts:111:24)
    at main (/Users/mikeseiler/dev/snissn/hardhat-init/scripts/deploy.js:15:16)
```

running ganache can verify that this command /should/ succeed: 


```
ganache-cli -p8544 -s asdlkfj --chain.chainId 3522868364964899 --chain.networkId 3522868364964899
```


```
mikeseiler@Mikes-MacBook-Air hardhat-init % npx hardhat --network ganache  run scripts/deploy.js
Lock with 0.001ETH and unlock timestamp 1705625222 deployed to 0x8AC0Bad5A9b4254A5c9E1FE52c9D96d9DbD5170b
```










# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
