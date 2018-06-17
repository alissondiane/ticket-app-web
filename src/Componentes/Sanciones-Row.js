import React from 'react'

class SancionesRow extends React.Component {
 

  render() {
    return(
    <tr>
     
      <td >{this.props.sancion.nombres} {this.props.sancion.apePat} {this.props.sancion.apeMat}</td>
	    <td >{this.props.sancion.codigo}</td>	
      <td>{this.props.sancion.inicio}</td>
      <td>{this.props.sancion.fin}</td>
      <td >{this.props.sancion.nombreSancion}</td>
	  </tr>
    )
  }
}
//<td className="td">{this.props.pago.idRec}</td>
//<td className="td">{this.props.pago.alumno.idAlum}</td>
export default SancionesRow;