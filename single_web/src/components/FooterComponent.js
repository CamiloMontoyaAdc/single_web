import React, { Component } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import '../styles/FooterComponent.css';

function handleClick(event) {
  event.preventDefault();
  console.info('Se ha hecho click en el botón.');
}


class FooterComponent extends Component{

	render(){
		return(
			<div className="FooterComponent">
				<Breadcrumbs aria-label="Breadcrumb">
			      <Link color="inherit" href="/" onClick={handleClick}>
			        Uno
			      </Link>
			      <Link color="inherit" href="/" onClick={handleClick}>
			        Dos
			      </Link>
			      <Link color="inherit" href="/" onClick={handleClick}>
			        Tres
			      </Link>
			    </Breadcrumbs>
		    </div>
		);
	}
}

export default FooterComponent;

