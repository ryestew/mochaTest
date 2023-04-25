import { ethers } from 'ethers'
const { expect } = require("chai")

describe("Storage", function () {
  it("test initial value", async function () {
    // Make sure contract is compiled and artifacts are generated
    const metadata = JSON.parse(await remix.call('fileManager', 'getFile', 'contracts/artifacts/MyResolver.json'))
    const signer = (new ethers.providers.Web3Provider(web3Provider)).getSigner()
    let MyResolver = new ethers.ContractFactory(metadata.abi, metadata.data.bytecode.object, signer);
    let myResolver = await MyResolver.deploy();
    console.log('myResolver contract Address: ' + myResolver.address)
    await myResolver.deployed()
    let myAddr = await myResolver.resolve()
    console.log('myResolver resolve: ' + myAddr)
    expect(myAddr).to.equal('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045') 
  })
})
