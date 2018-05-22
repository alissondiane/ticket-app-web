import React from 'react';
import {browserHistory} from 'react-router-3';
import { Link } from 'react-router-3';
import SelectNuevo from './SelectNuevo'
import HEROES from './heroes';
import MENU from './Data-Menu';
import FiltroFecha from './FiltroFecha';
import MenuList from './Menu.Semana';
import TableHeaderMenuList from './Table-Header-MenuList'

class VistaPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario : '',
      isValid : false,
      password: '',
      precio : '',
      departamento : ''

    };
    
    this.CerrarSesion = this.CerrarSesion.bind(this);
    this.MenuNuevo = this.MenuNuevo.bind(this);
    this.OpcionSeleccionadaDepartamento = this.OpcionSeleccionadaDepartamento.bind(this);
    this.onChange = this.onChange.bind(this);
    this.SeleccionFechaDel= this.SeleccionFechaDel.bind(this);
  }

  CerrarSesion=(e)=>{
    
    browserHistory.push('/');
    console.log("VISTA LOGIN");
    e.preventDefault();
    
  }
  MenuNuevo=(e)=>{
    
    browserHistory.push('/Vista/MenuNuevo');
    console.log("VISTA MENU NUEVO");
    e.preventDefault();
    
  }
  OpcionSeleccionadaDepartamento(opcion) {
    if(opcion != null){
    console.log("opcion seleccionada categoria");
    console.log(opcion);
    this.setState({departamento: opcion.value});
    }
  }
  onChange(e) {
    console.log("precio ingresado");
    console.log(e.target.value);
    this.setState({precio:e.target.value});
  }
  SeleccionFechaDel(Fecha) {
    console.log("fecha para buscar menu")
    console.log(Fecha);
    var fecha1 = new String(Fecha);
    console.log(fecha1);
    //this.setState({dateFrom: fecha1});
    
  }
 
  render() {
    

    return (

      <div className="">
            <div className="menu row">
              <div className=" col-xs-4 margen_top">
               <h4>Menu<i className="material-icons logo1">restaurant</i></h4>
              </div>
              <div className="col-xs-8 margen_top">
                <button type="submit" className = "button" onClick={this.CerrarSesion}>Cerrar sesion</button>
              </div>
            </div>
          
            <hr />
  <div className="SplitPane row">
    <div className="col-xs-8" margen_top>
        <div className="SplitPane row">
            <div className="col-xs-3 margen_top">
                <label className="margen_top">Fecha:</label>
            </div>
            <div className="col-xs-6 margen_top">
                  <FiltroFecha Fechas={this.SeleccionFechaDel} />
            </div>
            <div className=" col-xs-3 margen_top" >
            <button  className="waves-effect waves-light btn-large botonazul2 right"type="submit">Buscar<i className="material-icons left">search</i></button>
            </div>
        </div>
    </div>
    <div className=" col-xs-4 margen_top">
    <button  onClick={this.MenuNuevo} className="waves-effect waves-light btn-large botonazul2 right"type="submit">Crear Menu<i className="material-icons left">restaurant</i></button>
    </div>
  </div>
  <div className="SplitPane row center-xs">
            <div className="  center-xs-12">
              <table className=" total table ">
                <TableHeaderMenuList />
                <MenuList  listado={MENU} />
              </table>
              </div>

   </div>
    </div>
    );
  }
}

export default VistaPrincipal ;