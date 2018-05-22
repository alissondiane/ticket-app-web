import React from 'react';
import {browserHistory} from 'react-router-3';
import { Link } from 'react-router-3';
import SelectNuevo from './SelectNuevo'
import FiltroFecha from './FiltroFecha'
import HEROES from './heroes';


class ClienteNuevo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: '',
        apellido:'',
        telefono:'',
        email:'',
        usuario:'',
        contraseña:''
    };

    this.onSubmit = this.onSubmit.bind(this);
  
    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.onChange3 = this.onChange3.bind(this);
    this.onChange4 = this.onChange4.bind(this);
    this.onChange5 = this.onChange5.bind(this);
    this.onChange6 = this.onChange6.bind(this);
    
  }
  componentWillMount() {

  }


  onSubmit=(e)=>{
    /*
    fetch('http://159.89.182.231/api/vehiculos/',
    {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(
      {
        "current_mileage": this.state.kmActual,
        "daily_mot_due": this.state.fecha,
        "engine_size": this.state.tamañoMaquina,
        "model": {
            "model_id": 1,
            "model_name": "TOYOTA RIO",
            "daily_hire_rate": 30.0,
            "manufacturer": 1
        },
        "vehiclecategory": {
            "vehicle_category_id": 1,
            "vehicle_category_name": "HOGAR"
        }
    }
      
    )
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })
    */
    console.log(this.state.nombre);
    console.log(this.state.apellido);
    console.log(this.state.telefono);
    console.log(this.state.email);
    console.log(this.state.usuario);
    console.log(this.state.contraseña);
    
    e.preventDefault();
    
  }
 
 
  onChange1(e) {
    this.setState({nombre:e.target.value});
  }
  onChange2(e) {
    this.setState({apellido: e.target.value});
  }
  onChange3(e) {
    this.setState({telefono: e.target.value});
  }
  
  onChange4(e) {
    this.setState({email:e.target.value});
  }
  onChange5(e) {
    this.setState({usuario: e.target.value});
  }
  onChange6(e) {
    this.setState({contraseña: e.target.value});
  }

  render() {
    const { nombres, isLoading,isValid } = this.state;

    return (
      
      <div >
      <div className="menu row">
              <div className=" col-xs-4 margen_top">
               <h4>Cliente Nuevo<i className="material-icons logo1">person</i></h4>
              </div>
        </div>
      <hr></hr>
      
      <form  onChange={this.onChange}>
          <div>
          <div className="SplitPane row">
            <div className=" col-xs-6 margen_top">
            <div>
            <label>Nombre:</label>
            <input type="text" value={this.state.nombre} onChange={this.onChange1}  placeholder="Nombre"/>
            </div> 
            <div>
            <label>Apellido:</label>
            <input type="text" value={this.state.apellido} onChange={this.onChange2}  placeholder="Apellido"/>
            </div>
            <div>
            <label>Telefono:</label>
            <input type="text" value={this.state.telefono} onChange={this.onChange3}  placeholder="Telefono"/>
            </div>
            <div>
            <label>Email:</label>
            <input type="text" value={this.state.email} onChange={this.onChange4}  placeholder="Email"/>
            </div>
            
            </div>
            <div className=" col-xs-6 margen_top">
           
            <div>
            <label>Usuario:</label>
            <input type="text" value={this.state.usuario} onChange={this.onChange5} placeholder="Usuario"/>
            </div>
            <div>
            <label>Contraseña:</label>
            <input type="text" value={this.state.contraseña} onChange={this.onChange6} placeholder="Contraseña"/>
            </div>
            
            
            
          
          </div>  
          <div className="SplitPane">
                <div className="SplitPane-right margen_top">
                      <button type="submit" onClick={this.onSubmit} className="button">GUARDAR</button> 
                </div>
              </div>
        </div>
          </div>
    
      </form>
     </div>
    );
  }
}

export default ClienteNuevo;