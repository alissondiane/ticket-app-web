import React from 'react';
import {browserHistory} from 'react-router-3';
import { Link } from 'react-router-3';
import SelectNuevo from './SelectNuevo'
import HEROES from './heroes';
import MENU from './Data-Menu';
import FiltroFecha from './FiltroFecha';
import MenuList from './Menu.Semana';
import MenuListNuevo from './Menu.Semana.Nuevo';
import TableHeaderMenuList from './Table-Header-MenuList'

class MenuNuevo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario : '',
      isValid : false,
      password: '',
      precio : '',
      departamento : ''

    };
    
    this.VistaClienteNuevo = this.VistaClienteNuevo.bind(this);
    this.FiltrarFecha = this.FiltrarFecha.bind(this);
  }

  VistaClienteNuevo=(e)=>{
    
    browserHistory.push('/Vista/Principal');
    console.log("VISTA LISTADO CLIENTES");
    e.preventDefault();
    
  }
  FiltrarFecha(desayunos){
    console.log("listado de desayunos para guardar")
    console.log(desayunos);
  }
 
  render() {
    

    return (

      <div className="">
            <div className="menu row">
              <div className=" col-xs-4 margen_top">
               <h4>Menu Nuevo<i className="material-icons logo1">restaurant</i></h4>
              </div>
              <div className="col-xs-8 margen_top">
                <button type="submit" className = "button" onClick={this.VistaClienteNuevo}>Regresar</button>
              </div>
            </div>
          
            <hr />
            <div className="SplitPane row center-xs">
            <div className="center-xs-12">           
                <MenuListNuevo Fechas={this.FiltrarFecha} />
            </div>

   </div>
    </div>
    );
  }
}

export default MenuNuevo ;