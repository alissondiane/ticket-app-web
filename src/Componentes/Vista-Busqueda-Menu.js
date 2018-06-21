import React from 'react';
import { browserHistory } from 'react-router-3';
import MENU from './Data-Menu';
import FiltroFecha from './FiltroFecha';
import MenuList from './Menu.Semana';
import TableHeaderMenuList from './Table-Header-MenuList'
import '../App.css';
import ComidaDiaModal from './ComidaDiaModal'; //modal comida por dia
import swal from 'sweetalert'

class VistaBusquedaMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      modalOption: false, //apertura del modal
      modalComida: [],
      menu:[],
      name: this.props.params.name
    };

    this.CerrarSesion = this.CerrarSesion.bind(this);
    this.SeleccionFechaDel = this.SeleccionFechaDel.bind(this);
    this.Buscar = this.Buscar.bind(this);
    this.VistaSanciones=this.VistaSanciones.bind(this);
    this.ActualizarVista=this.ActualizarVista.bind(this);
  }

  CerrarSesion = (e) => {

    browserHistory.push('/');
    console.log("VISTA LOGIN");
    e.preventDefault();

  }
  
  Buscar=(e)=>{
    
    console.log("fecha a buscar en submit")
    console.log(this.state.fecha);
  
    fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/comida/listar/semanal/'+this.state.fecha)
    .then((response) => {
    return response.json()
    })
    .then((menues) => {
      //data
      
      var menuc = [];
      var lunes = {
        lunes : menues.lunes
      };
      var martes = {
        martes : menues.martes
      };
      var miercoles = {
        miércoles : menues.miercoles
      };
      var jueves = {
        jueves :menues.jueves
      };
      var viernes = {
        viernes : menues.viernes
      };
      var sabado = {
        sábado : menues.sabado
      };
      var domingo = {
        domingo : menues.domingo
      };

      menuc.push(lunes);
      menuc.push(martes);
      menuc.push(miercoles)
      menuc.push(jueves);
      menuc.push(viernes);
      menuc.push(sabado);
      menuc.push(domingo);
      console.log("menu de la semana");
      console.log(menuc);
      if(menuc[0].lunes != null){
        this.setState({ menu: menuc})
        swal("Busqueda realizada exitosamente!", "", "success");
      }else{
        swal("No se encontraron registros en esa fecha!", "","info");
      }
      
      
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        swal("Oops, Algo salió mal!!", "","error")
        console.error(error)
    });
/*
   this.setState({
    menu: MENU
}
  );


  
  swal("Busqueda realizada con exito!", "", "success");
*/
console.log("menu actualizado")
console.log(this.state.menu);



    e.preventDefault();
}
  VistaPrincipal = (e) => {

    browserHistory.push('/Vista/Principal/'+this.state.name);
    console.log("VISTA MENU NUEVO");
    e.preventDefault();

  }
  VistaSanciones= (e) => {

    browserHistory.push('/Vista/Sanciones/'+this.state.name);
    console.log("VISTA SANCIONES");
    e.preventDefault();

  }
  SeleccionFechaDel(Fecha) {
    console.log("fecha para buscar menu")
    console.log(Fecha);
    var fecha1 = new String(Fecha);
    console.log(fecha1);
    this.setState({ fecha: fecha1 });

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
    this.ActualizarVista();
   
  }
  ActualizarVista=()=>{
    fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/comida/listar/semanal/'+this.state.fecha)
    .then((response) => {
    return response.json()
    })
    .then((menues) => {
      //data
  
        console.log("data recibida");

        console.log(menues)
        console.log("menues del dia lunes")
        console.log(menues.lunes);
        var menuc = [];
        var lunes = {
          lunes : menues.lunes
        };
        var martes = {
          martes : menues.martes
        };
        var miercoles = {
          miércoles : menues.miercoles
        };
        var jueves = {
          jueves :menues.jueves
        };
        var viernes = {
          viernes : menues.viernes
        };
        var sabado = {
          sábado : menues.sabado
        };
        var domingo = {
          domingo : menues.domingo
        };
      
        menuc.push(lunes);
        menuc.push(martes);
        menuc.push(miercoles)
        menuc.push(jueves);
        menuc.push(viernes);
        menuc.push(sabado);
        menuc.push(domingo);
        console.log("menu de la semana");
        console.log(menuc);
        console.log()
        this.setState({ menu: menuc})
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
    <li><a onClick={this.VistaPrincipal}>Menú<i className="material-icons right">restaurant</i></a></li>
    <li className="Seleccionado  z-depth-1 " ><a  >Búsqueda<i className="material-icons right">search</i></a></li>
    <li><a onClick={this.VistaSanciones} >Sanciones<i className="material-icons right">gavel</i></a></li>
    
    </ul>
    <div className = "vistaderecha">

      <div className=" z-depth-1 cabecera">
    <a><i className="material-icons right logo1 azul3 z-depth-1 ">person</i></a>
    <a className="salir" onClick={this.CerrarSesion} >Cerrar Sesión</a>
    <a className="salir2" >Administrador {this.state.name}</a>
    
    
    </div>
    
 
    <div className=" row">
    <h4>Busqueda Menú<i className="material-icons logo1 right z-depth-1">search</i></h4>
        </div>
           
         
 
      
        <hr />
        <div className="SplitPane row">
        
            <div className="SplitPane row">
              <div className="col-xs-2 margen_top">
                <p className="margen_top">Fecha:</p>
              </div>
              <div className="col-xs-5 margen_top">
                <FiltroFecha Fechas={this.SeleccionFechaDel} />
              </div>
              <div className=" col-xs-5 margen_top" >
                <button onClick={this.Buscar} className="waves-effect waves-light btn-large botonazul2 right" type="submit">Buscar<i className="material-icons left">search</i></button>
              </div>
            </div>
          
        </div>

        <div className="SplitPane row center-xs">
          <div className="center-xs-12">
            <table className="total table ">
              <MenuList 
                listado={this.state.menu}
                modalSelectedOption={this.modalSelectedOption} /*metodo de captura de datos*//>
            </table>
            <ComidaDiaModal
              modalOption={this.state.modalOption}
              modalComida={this.state.modalComida}
              modalClearOption={this.modalClearOption}
              modalComida={this.state.modalComida}/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default VistaBusquedaMenu;