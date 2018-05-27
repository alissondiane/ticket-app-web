import React from 'react';
import {browserHistory} from 'react-router-3';
import MenuListNuevo from './Menu.Semana.Nuevo';
import swal from 'sweetalert'

class MenuNuevo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuNuevo : ""

    };
    
    this.VistaClienteNuevo = this.VistaClienteNuevo.bind(this);
    this.GuardarMenu = this.GuardarMenu.bind(this);
  }

  VistaClienteNuevo=(e)=>{
    
    browserHistory.push('/Vista/Principal');
    console.log("VISTA LISTADO CLIENTES");
    e.preventDefault();
    
  }
  GuardarMenu(menu){
    console.log("menu para guardar")
    console.log(menu);
    this.setState({
     menuNuevo: menu
    });

    swal("Menu","guardado exitosamente","success");
    browserHistory.push('/Vista/Principal');
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
                <MenuListNuevo Fechas={this.GuardarMenu} />
            </div>
            <div>
            {JSON.stringify(this.state.menuNuevo,null,'\t')}
         
            </div>

   </div>
    </div>
    );
  }
}

export default MenuNuevo ;