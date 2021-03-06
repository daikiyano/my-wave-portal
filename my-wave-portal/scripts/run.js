// run.js
const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  console.log("Contract added to:", waveContract.address);
  let waveCount;
  waveCount = await waveContract.getTotalWaves();
  console.log(waveCount.toNumber());
  /**
   * ãðï¼waveï¼ããéã
   */
  let waveTxn = await waveContract.wave("A message!");
  await waveTxn.wait(); // ãã©ã³ã¶ã¯ã·ã§ã³ãæ¿èªãããã®ãå¾ã¤ï¼ãã¹ã:1åç®ï¼
  const [_, randomPerson] = await hre.ethers.getSigners();
  waveTxn = await waveContract.connect(randomPerson).wave("Another message!");
  await waveTxn.wait(); // ãã©ã³ã¶ã¯ã·ã§ã³ãæ¿èªãããã®ãå¾ã¤ï¼ãã¹ã:2åç®ï¼
  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
};
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
runMain();