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
import Buscar from './Buscar'; //input codigo a buscars
import ATENCION from './Data-Atencion'; //input codigo a buscars
import swal from 'sweetalert'
import CardAtencion from './Card-Atencion'; //input codigo a buscars
import SelectNuevo from './SelectNuevo'
import OPCION from './Data-Select'


class VistaAtencion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alumno:null,
      fecha: '',
      modalOption: false, //apertura del modal
      modalComida: [],
      menu:[],
      sanciones:[],
      codigo:0,
      name: this.props.params.name,
      opcion:''
    };

    this.CerrarSesion = this.CerrarSesion.bind(this);
    this.Atender = this.Atender.bind(this);
    this.Buscar=this.Buscar.bind(this);
    this.OpcionSeleccionada=this.OpcionSeleccionada.bind(this);
  }

  CerrarSesion = (e) => {

    browserHistory.push('/');
    console.log("VISTA LOGIN");
    e.preventDefault();

  }
  Atender = (e) => {
    swal("Atendido exitosamente!", "", "success");
    e.preventDefault();

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
  Buscar(busqueda) {
    console.log("codigo ingresado");
    console.log(busqueda.codigo);
    swal("Busqueda realizada exitosamente!", "", "success");
    this.setState({alumno: ATENCION})
/*
    fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/usuario/aplicarsancion/sancion/listar')
    .then((response) => {
    return response.json()
    })
    .then((alumno) => {
      if(alumno){
         this.setState({alumno: alumno})
         swal("Busqueda realizada exitosamente!", "", "success");
      }else{
        this.setState({alumno: null})
        swal("No tickets!", "", "info");
      }
  


    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
        swal("Oops, Algo salió mal!!", "","error")
    });
*/

  }
  OpcionSeleccionada(opcion) {

    if(opcion != null){
    console.log("opcion seleccionada del select");
    console.log(opcion);
    console.log(opcion.label);
    this.setState({opcion: opcion.label});
    }
  }
  render() {


    return (
      

    <div className="">
    

    <ul className="ula">
    <li className="OGBU"></li>
    <li  className="Seleccionado  z-depth-1 "><a  >Atención<i className="material-icons right">check</i></a></li>
    </ul>
    <div className = "vistaderecha">
    <div className=" z-depth-1 cabecera">
    <a><i className="material-icons right logo1 azul3 z-depth-1 ">person</i></a>
    <a className="salir" onClick={this.CerrarSesion} >Cerrar Sesión</a>
    <a className="salir2" >Trabajador {this.state.name}</a>
    
    
    </div>
        <div className="row">
              <h4>Vista atención<i className="material-icons logo1 right z-depth-1">person</i></h4>
        </div>
        <hr />
        <div className="SplitPane row">
            <div className="col-xs-9">
                <Buscar Busqueda={this.Buscar} />
            </div>
            <div className="col-xs-3 margen_top">
                <SelectNuevo listado = {OPCION} Opcion={this.OpcionSeleccionada}/>
            </div>  

        </div>
        <div className="SplitPane row">
            <div className=" col-xs-12">
                <CardAtencion listado={this.state.alumno} />
            </div> 
            
        </div>
        <div className="SplitPane row center-xs">  
        <button onClick={this.Atender} className="waves-effect waves-light btn-large botonazul2 right" type="submit">ATENDER<i className="material-icons left">check</i></button>
        </div>

        </div>
    </div>
 
    );
  }
}

export default VistaAtencion;