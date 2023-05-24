import { ethers } from 'ethers'
const { expect } = require("chai")

describe("Storage", function () {
  it("test initial value", async function () {
    const signer = await ethers.getSigners();
    // let MyResolver = new ethers.ContractFactory(metadata.abi, metadata.data.bytecode.object, signer[0]);
    const MyResolver = await ethers.getContractFactory("MyResolver");

   let myResolver = await MyResolver.connect(signer[0]).deploy();
    // const result = await deploy('Storage', [])
    // let myResolver = await MyResolver.deploy();

    await myResolver.deployed()
    console.log('myResolver conytract Address: ' + myResolver.address)
    let myAddr = await myResolver.resolve()
    console.log('myResolver resolve: ' + myAddr)
    expect(myAddr).to.equal('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045') 
  })
})
