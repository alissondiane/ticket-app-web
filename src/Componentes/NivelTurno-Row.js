import React from 'react'
import {browserHistory} from 'react-router-3';

class NivelTurnoRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NT : this.props.nivelTurno,
      nro_tickets:this.props.nivelTurno.numTickets,


    };
  }

  render() {
    return(
    <tr>
              <td className="tdNT">{this.state.NT.nivel} </td>         
              <td className="tdNT">{this.state.NT.turno}</td>
              <td className="tdNT">{this.state.NT.horaInicio}</td>     
              <td className="tdNT">{this.state.NT.horaFin} </td>
              <td className="tdNT">
              <input className="nroTickets input2" disabled="true" id={this.state.nro_tickets} type="number"
              onChange={(e)=>{ this.setState({nro_tickets: e.target.value}); e.preventDefault(); }}
              value={this.state.nro_tickets} /> </td>
              
  
     
      
	</tr>
    )
  }
}
//<td className="td">{this.props.pago.idRec}</td>
//<td className="td">{this.props.pago.alumno.idAlum}</td>
export default NivelTurnoRow;
