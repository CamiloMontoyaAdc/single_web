import React, { Component } from 'react';
import { Toast } from 'react-bootstrap';
import '../styles/AssideComponent.css';

class AssideComponent extends Component{

	render(){
		return(
			<div className = "AssideComponent" style={{'float':'right','margin-top':'15px'}}>
				  <Toast>
				    <Toast.Header>
				      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
				      <strong className="mr-auto">Tarjeta #1</strong>
				      <small>Justo ahora</small>
				    </Toast.Header>
				    <Toast.Body>See? Ejemplo uno de tarjeta.</Toast.Body>
				  </Toast>
				  <Toast>
				    <Toast.Header>
				      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
				      <strong className="mr-auto">Tarjeta #2</strong>
				      <small>Hace 2 segundos</small>
				    </Toast.Header>
				    <Toast.Body>Ejemplo número dos de trarjeta.</Toast.Body>
				  </Toast>
				   <Toast>
				    <Toast.Header>
				      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
				      <strong className="mr-auto">Tarjeta #3</strong>
				      <small>Hace 2 segundos</small>
				    </Toast.Header>
				    <Toast.Body>Ejemplo número tres de trarjeta.</Toast.Body>
				  </Toast>
				   <Toast>
				    <Toast.Header>
				      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
				      <strong className="mr-auto">Tarjeta #4</strong>
				      <small>Hace 2 segundos</small>
				    </Toast.Header>
				    <Toast.Body>Ejemplo número cuatro de trarjeta.</Toast.Body>
				  </Toast>
				   <Toast>
				    <Toast.Header>
				      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
				      <strong className="mr-auto">Tarjeta #5</strong>
				      <small>Hace 2 segundos</small>
				    </Toast.Header>
				    <Toast.Body>Ejemplo número cinco de trarjeta.</Toast.Body>
				  </Toast>
			</div>
		);
	}
}

export default AssideComponent;

