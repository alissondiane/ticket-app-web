import React from 'react';
import { browserHistory } from 'react-router-3';
import MENU from './Data-Menu';
import SANCIONES from './Data-Sanciones';
import FiltroFecha from './FiltroFecha';
import MenuList from './Menu.Semana';
import SancionesList from './Sanciones-List';
import '../App.css';
import ComidaDiaModal from './ComidaDiaModal'; //modal comida por dia
import FechaActual from './FechaActual'; //fecha
import swal from 'sweetalert'

class VistaSanciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      modalOption: false, //apertura del modal
      modalComida: [],
      menu:[],
      sanciones:[],
      name: this.props.params.name
    };

    this.CerrarSesion = this.CerrarSesion.bind(this);
    this.MenuNuevo = this.MenuNuevo.bind(this);
    this.MenuBusqueda= this.MenuBusqueda.bind(this);
    this.VistaPrincipal=this.VistaPrincipal.bind(this);
  }

  CerrarSesion = (e) => {

    browserHistory.push('/');
    console.log("VISTA LOGIN");
    e.preventDefault();

  }
  MenuNuevo = (e) => {

    browserHistory.push('/Vista/MenuNuevo');
    console.log("VISTA MENU NUEVO");
    e.preventDefault();

  }
  VistaPrincipal = (e) => {

    browserHistory.push('/Vista/Principal/'+this.state.name);
    console.log("VISTA MENU NUEVO");
    e.preventDefault();

  }
  MenuBusqueda= (e) => {

    browserHistory.push('/Vista/MenuBusqueda/'+this.state.name);
    console.log("VISTA MENU BUSQUEDA");
    e.preventDefault();

  }

  // capturamos lo seleccionado de Menu.Semana.js
  modalSelectedOption = (comida) => {
    this.setState(()=>({ 
      modalComida: comida,
      modalOption: true }))
  }
  //cerramos el modal
  modalClearOption = () => {
    this.setState( () => ({ modalOption: false}) );

   
  }
  componentWillMount() {
    //Cargar data de sanciones
    
    fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/usuario/aplicarsancion/sancion/listar')
    .then((response) => {
    return response.json()
    })
    .then((sanciones) => {
      this.setState({ sanciones: sanciones})

    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
    });
  }
  render() {


    return (
      

    <div className="">
    

    <ul className="ula">
    <li className="OGBU"></li>
    <li><a onClick={this.VistaPrincipal}>Menú<i className="material-icons right ">restaurant</i></a></li>
    <li><a onClick={this.MenuBusqueda} >Búsqueda<i className="material-icons right">search</i></a></li>
    <li  className="Seleccionado  z-depth-1 "><a  >Sanciones<i className="material-icons right">gavel</i></a></li>
    </ul>
    <div className = "vistaderecha">
    <div className=" z-depth-1 cabecera">
    <a><i className="material-icons right logo1 azul3 z-depth-1 ">person</i></a>
    <a className="salir" onClick={this.CerrarSesion} >Cerrar Sesión</a>
    <a className="salir2" >Administrador {this.state.name}</a>
    
    
    </div>
        <div className="row">
              <h4>Usuarios Sancionados<i className="material-icons logo1 right z-depth-1">person</i></h4>
        </div>
        <hr />
        <div className="row">
            <div className="col-xs-9 margen_top">
            <SancionesList listado={this.state.sanciones} />
            </div>
          
  <div className="col-xs-3">
  <div className="mensaje">
      <div class="card white darken-1">
        <div class="card-content black-text">
          <span class="card-title centrar">Sanciones<i className="material-icons right">gavel</i></span>
          <label>Motivo:</label>
          <p>Inasistencia al comedor</p>
          <p>Días sin poder realizar reserva:</p>
          <label className="leve">Leve: 1 día</label>
          <label className="media">Media: 3 días</label>
          <label className="alta">Alta: 5 días</label>
        </div>
      </div>
      </div>
    </div>

           
               
           
        </div>
    </div>
    </div>
    );
  }
}

export default VistaSanciones;