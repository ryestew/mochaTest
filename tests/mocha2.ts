import { ethers } from 'ethers'
const { expect } = require("chai")
const fs = require("fs")

describe("Storage", function () {
  it("test initial value", async function () {
    // Make sure contract is compiled and artifacts are generated
    // console.log('process.cwd(): ', process.cwd())
    const metadata = JSON.parse(fs.readFileSync('./contracts/artifacts/MyResolver.json'))
    // console.log('metadata: ', metadata)
    const signer = (new ethers.providers.Web3Provider(web3Provider)).getSigner()
    let MyResolver = new ethers.ContractFactory(metadata.abi, metadata.data.bytecode.object, signer);
    let myResolver = await MyResolver.deploy();
    console.log('myResolver conytract Address: ' + myResolver.address)
    await myResolver.deployed()
    let myAddr = await myResolver.resolve()
    console.log('myResolver resolve: ' + myAddr)
    expect(myAddr).to.equal('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045') 
  })
})
