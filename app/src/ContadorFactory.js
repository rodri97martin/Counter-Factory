import React from 'react';
import Factory from './Factory';
import ContractForm from './ContractForm';
import { drizzleConnect } from 'drizzle-react';

class ContadorFactory extends React.Component {
	render() {
		return (
			<div>
				<h1 align="center">Contract Factory</h1>
				<ContractForm contract="ContadorFactory" method="createContador" name="Crear Contador" />
				<Factory/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ContadorFactory: state.contracts.ContadorFactory
	};
};

export default drizzleConnect(ContadorFactory, mapStateToProps);