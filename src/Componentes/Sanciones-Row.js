import React from 'react'

class SancionesRow extends React.Component {
 

  render() {
    return(
    <tr>
     
      <td>{this.props.sancion.nombre}</td>
	    <td>{this.props.sancion.codigoAlumno}</td>	
      <td>{this.props.sancion.inicioSancion}</td>
      <td>{this.props.sancion.finSancion}</td>
      <td>{this.props.sancion.nombreSancion}</td>
	  </tr>
    )
  }
}
//<td className="td">{this.props.pago.idRec}</td>
//<td className="td">{this.props.pago.alumno.idAlum}</td>
export default SancionesRow;