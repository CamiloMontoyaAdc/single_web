import React, { Component } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import '../styles/FooterComponent.css';

class FooterComponent extends Component{

	render(){
		return(
			<div className="FooterContainer">
			<div className="FooterComponent">
				<Breadcrumbs aria-label="Breadcrumb">
			      <Link color="inherit" target="_blank" href="https://github.com/CamiloMontoyaAdc">
			        Uno
			      </Link>
			      <Link color="inherit" target="_blank" href="https://github.com/CamiloMontoyaAdc">
			        Dos
			      </Link>
			      <Link color="inherit" target="_blank" href="https://github.com/CamiloMontoyaAdc">
			        Tres
			      </Link>
			    </Breadcrumbs>
		    </div>
		    <div className="FooterText">
		    	<footer>
			    	<p>&copy; - Elaborado por Camilo Montoya Adc- Todos los derechos reservados - Bogotá, Colombia - 2020</p>
			    </footer>
		    </div>
		    </div>
		);
	}
}

export default FooterComponent;

