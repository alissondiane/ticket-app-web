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
    <tr>

            
              <td className="tdNT">{this.state.NT.NIVEL} </td>         
              <td className="tdNT">{this.state.NT.TURNO}</td>
              <td className="tdNT">{this.state.NT.HORA_INICIO}</td>     
              <td className="tdNT">{this.state.NT.HORA_FIN} </td>
              <td className="tdNT"><input type="number" className="input" value={this.state.NT.NUMERO_TICKETS} /> </td>
              
  
     
      
	</tr>
    )
  }
}
//<td className="td">{this.props.pago.idRec}</td>
//<td className="td">{this.props.pago.alumno.idAlum}</td>
export default NivelTurnoRow;
