const Contador = artifacts.require("Contador");
const ContadorFactory = artifacts.require("ContadorFactory");

module.exports = function(deployer) {
  deployer.deploy(Contador);
  deployer.deploy(ContadorFactory);
};
