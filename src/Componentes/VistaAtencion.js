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
      codigo:0,
      name: this.props.params.name,
      opcion:'',
      bloqueo:true
    };

    this.CerrarSesion = this.CerrarSesion.bind(this);
    this.Atender = this.Atender.bind(this);
    this.Buscar=this.Buscar.bind(this);
    this.OpcionSeleccionada=this.OpcionSeleccionada.bind(this);
    this.Aplicar= this.Aplicar.bind(this);
  }

  CerrarSesion = (e) => {

    browserHistory.push('/');
    console.log("VISTA LOGIN");
    e.preventDefault();

  }
  Atender = (e) => {
    fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/ticket/validar',
        {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PUT",//cambiar a metodo PUT de actualizacion
        body: JSON.stringify(
          {
          "idTicket":this.state.alumno.idTicket,
          "numero":2,
          "estado":"RESERVADO",
          "idComida":1,
          "idNt":1,
          "idUsuario":this.state.alumno.idUsuario
        }
          
        )
    })
    .then((response) => {
      return response.json()
      })
    .then((data) => {
      console.log("DATA QUE DEVUELVE EL PUT de atender")
      console.log(data)
      if(data.estado == 0){
        swal("No se encuentra en la hora de atención establecida!", "", "warning");
      }else{
        fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/usuario/ticket/nivelturno/leer/'+this.state.codigo+'/'+ this.state.opcion)
        .then((response) => {
        return response.json()
        })
        .then((alumno) => {
          console.log("alumno actualizado enn la vista recibido");
          console.log(alumno);
              this.setState({alumno: alumno,
              bloqueo:true})
    
        })
        .catch(error => {
              console.error(error)
        });
        swal("Atendido exitosamente!", "", "success");
      }   
  
      })
      .catch(error => {
          swal("Error al actualizar!", "", "error");
          console.error(error)
    });
    e.preventDefault();

  }
  Aplicar= (e) => {
   console.log("aplicar");

    fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/sancion/aplicar',
    {
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(
    {
    }
      )
    })
    .then((response) => {
    return response.json()
    })
  .then((data) => {
   console.log("data recibida");
   console.log(data.mensaje);
   console.log("cantidad de sancionados")
   console.log(data.estado);
   swal("Sanciones aplicadas exitosamente!", "", "success");
  })
  .catch(error => {
  console.error(error)
  console.log("error al aplicar sancion");
    });
    fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/sancion/quitar',
    {
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(
    {
    }
      )
    })
    .then((response) => {
    return response.json()
    })
  .then((data) => {
   console.log("data recibida");
   console.log(data.mensaje);
   console.log("cantidad de sancionados")
   console.log(data.estado);
  })
  .catch(error => {
  console.error(error)
  console.log("error al aplicar sancion");
    });
    e.preventDefault();

  }
  Buscar(busqueda) {
    console.log("CODIGO A BUSCAR");
    console.log(busqueda.codigo);
    this.setState(()=>({bloqueo:true}))
    this.setState({codigo: busqueda.codigo});
    
    console.log("TIPO DE COMIDA DEL SELECT");
    console.log(this.state.opcion);
    if(this.state.opcion){
        
    fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/usuario/ticket/nivelturno/leer/'+busqueda.codigo+'/'+ this.state.opcion)
    .then((response) => {
    return response.json()
    })
    .then((alumno) => {
      console.log("alumno recibido");
      console.log(alumno);
      if(alumno){
        if(alumno.codigo == null){
          this.setState({alumno: null,
            bloqueo:true})
          swal("No se encontraron registros!", "", "info");
        }else{
                         
      this.setState(()=>({alumno: alumno,
        bloqueo:false}))
          swal("Busqueda realizada exitosamente!", "", "success");
        }
      }
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
        swal("Oops, Algo salió mal!!", "","error")
    });
    }else{
      alert("Debe seleccionar un tipo de comida")
    }
    
    



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
    <button onClick={this.Aplicar} className="waves-effect waves-light btn-large botonazul2 right" type="submit">APLICAR</button>
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
        <button onClick={this.Atender} disabled={this.state.bloqueo} className="waves-effect waves-light btn-large botonazul2 right" type="submit">ATENDER<i className="material-icons left">check</i></button>
        </div>

        </div>
    </div>
 
    );
  }
}

export default VistaAtencion;