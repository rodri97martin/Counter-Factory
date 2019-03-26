import React from 'react';
import { drizzleConnect } from 'drizzle-react';
import PropTypes from 'prop-types';
import ContractData from './ContractData';
import ContractForm from './ContractForm';

class ContadorActivador extends React.Component {

    constructor(props, context) {
        super(props)
        this.drizzle = context.drizzle;
    }

    componentDidMount() {

        console.log("==== COMPONENTE CONTADOR MONTADO ============", this.props.direccion );

        const json = require('./contracts/Contador.json');

          const contractConfig = {
             contractName: this.props.direccion,
             web3Contract: new this.drizzle.web3.eth.Contract(json.abi, this.props.direccion)
          };

          this.drizzle.addContract(contractConfig, []);
    }

    componentWillUnmount() {

      console.log("==== COMPONENTE CONTADOR DESMONTADO ============", this.props.direccion );

      this.drizzle.deleteContract(this.props.direccion);
    }

    render() {
        const mapStateToProps = state => {
            return {
                Contador: state.contracts[this.props.direccion],
                accounts: state.accounts
            }
        };

        const ContadorContainer = drizzleConnect(Contador, mapStateToProps);

        return <ContadorContainer direccion={this.props.direccion} />;
    }
}


class Contador extends React.Component {

  constructor(props, context) {
    super(props);
    this.contracts = context.drizzle.contracts;
  }

  render() {
    
    let data;
    let form;

    const instanceState = this.props.Contador;

    if (instanceState && instanceState.initialized) {

      data = <ContractData contract={this.props.direccion} method="valor" />
      form = <ContractForm contract={this.props.direccion} name="Incrementar" method="incr" sendArgs={{from: this.props.accounts[0]}} />

    }

    return (
      <div>

          <h4>{"Contador "+this.props.direccion}</h4>
          {data}
          {form}
        
      </div>
    );
  }

};


ContadorActivador.contextTypes = {
    drizzle: PropTypes.object
};

Contador.contextTypes = {
    drizzle: PropTypes.object
};

export default ContadorActivador;
