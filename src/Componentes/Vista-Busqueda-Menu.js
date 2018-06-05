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
      menu:[]
    };

    this.CerrarSesion = this.CerrarSesion.bind(this);
    this.SeleccionFechaDel = this.SeleccionFechaDel.bind(this);
    this.Buscar = this.Buscar.bind(this);
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
        miércoles : menues.miércoles
      };
      var jueves = {
        jueves :menues.jueves
      };
      var viernes = {
        viernes : menues.viernes
      };
      var sabado = {
        sábado : menues.sábado
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
        swal("No se encontraron registros en esa fecha!", "", "error");
      }
      
      
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        swal("No se encontraron registros en esa fecha!", "", "error");
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

    browserHistory.push('/Vista/Principal');
    console.log("VISTA MENU NUEVO");
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
   
  }

  render() {


    return (

    <div className="">
        <nav>
    <div class="nav-wrapper azul">
      
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a onClick={this.VistaPrincipal} >Menu<i className="material-icons right">restaurant</i></a></li>
        <li className ="Seleccionado"><a>Busqueda<i className="material-icons right">search</i></a></li>
        <li><a onClick={this.CerrarSesion} ><i className="material-icons">exit_to_app</i></a></li>
      </ul>
    </div>
  </nav>
 
        <div className="menu row">
          <div className=" col-xs-4">
            <h4>Busqueda Menu<i className="material-icons logo1">search</i></h4>
          </div>
          <div className="col-xs-8 margen_top">
          </div>
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
    );
  }
}

export default VistaBusquedaMenu;