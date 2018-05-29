import React from 'react'
import {browserHistory} from 'react-router-3';

class NivelTurnoRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NT : this.props.nivelTurno

    };
    //this.VistaAlquiler = this.VistaAlquiler.bind(this);
  
  }
 
 /* VistaAlquiler=(e)=>{
    
    browserHistory.push('/Alquiler/'+ this.state.casa.id);
    e.preventDefault();
    
  }
  */
  render() {
    return(
    <div className="vistaNivelTurno">
    <div className="SplitPane1 row">
              <div className="col-xs-5">
                <label>NIVEL: {this.state.NT.NIVEL} </label>         
                <label>TURNO: {this.state.NT.TURNO}</label>
              </div>
              <div className="col-xs-5">
              <label>HORA-INICIO: {this.state.NT.HORA_INICIO}</label>     
              <label>HORA-FIN: {this.state.NT.HORA_FIN} </label>
              </div>
    </div>
     
      
	</div>
    )
  }
}
//<td className="td">{this.props.pago.idRec}</td>
//<td className="td">{this.props.pago.alumno.idAlum}</td>
export default NivelTurnoRow;