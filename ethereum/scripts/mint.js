require("dotenv").config();
const { ethers } = require("ethers");

const contract = require("../artifacts/contracts/EmotionalShapes.sol/EmotionalShapes.json");
const contractInterface = contract.abi;

const provider = ethers.getDefaultProvider("goerli", {
    alchemy: process.env.DEV_API_URL,
});

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const emotionalShapes = new ethers.Contract(
    "0x98AdBf54933d32cF3756134DC8bA240e0d4CE35D",
    contractInterface,
    wallet
);

const main = () => {
    emotionalShapes
    .mint(process.env.PUBLIC_KEY)
    .then((transaction) => console.log(transaction))
    .catch((e) => console.log("something est pas bon", e));
};

main();