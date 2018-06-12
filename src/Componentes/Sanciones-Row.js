import React from 'react'

class SancionesRow extends React.Component {
 

  render() {
    return(
    <tr>
     
      <td className="td3">{this.props.sancion.nombres} {this.props.sancion.apePat} {this.props.sancion.apeMat}</td>
	    <td className="td3">{this.props.sancion.codigo}</td>	
      <td className="td3">{this.props.sancion.inicio}</td>
      <td className="td3">{this.props.sancion.fin}</td>
      <td className="td3">{this.props.sancion.nombreSancion}</td>
	  </tr>
    )
  }
}
//<td className="td">{this.props.pago.idRec}</td>
//<td className="td">{this.props.pago.alumno.idAlum}</td>
export default SancionesRow;