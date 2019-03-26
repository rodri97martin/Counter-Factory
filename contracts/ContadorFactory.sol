pragma solidity >=0.4.17 <=6.0.0;

contract ContadorFactory {
    
  address[] public contadores;
   
  function createContador() public {
    Contador newContador = new Contador(); 
    address a = address(newContador);
    contadores.push(a);   
  }
   
  function getContadores() public view returns (address[] memory) {
    return contadores;
  }

  function getNumOfContadores() public view returns (uint) {
       return contadores.length;
   }
   
}

contract Contador {
    
  uint8 public valor;
    
  event Tic(string msg, uint8 out);
    
  constructor() public {
    valor = 0;
  }
        
  function incr() public {
    valor++;
    emit Tic("Actualizado", valor);
  }
}