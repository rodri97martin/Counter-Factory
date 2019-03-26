import ContadorFactory from "./contracts/ContadorFactory.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:7545",
    },
  },
  contracts: [ContadorFactory],
  events: {
    Contador: ["Tic"],
  },
  polls: {
    accounts: 1500,
  },
};

export default options;
