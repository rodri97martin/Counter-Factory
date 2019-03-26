import { drizzleConnect } from "drizzle-react";
import React from "react";
import PropTypes from "prop-types";
import Contador from './Contador';

class Factory extends React.Component {

	constructor(props, context) {
		super(props);
		this.contracts = context.drizzle.contracts;
    	this.state = {
      		dataKey: this.contracts["ContadorFactory"].methods["getContadores"].cacheCall(),
    	};
	}

	render() {
		// If the cache key we received earlier isn't in the store yet; the initial value is still being fetched.
	    if (!(this.state.dataKey in this.props.ContadorFactory.getContadores)) {
	      return <span>Fetching...</span>;
	    }

		var contadores = this.props.ContadorFactory["getContadores"][this.state.dataKey];

		contadores = contadores ? contadores.value : [];

		if (contadores.length === 0) {
			return (
				<div>
					<br></br>
					<strong>Ningún contador</strong>
				</div>
			);
		}

		return(
			<ul>
				{contadores.map((direccion, index) =>
					<li key={index}>
						<Contador direccion={direccion} />
					</li>
				)}
			</ul>
		);
	}
}

Factory.contextTypes = {
  drizzle: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    ContadorFactory: state.contracts.ContadorFactory,
  };
};

export default drizzleConnect(Factory, mapStateToProps);
