import React from 'react'

class SancionesRow extends React.Component {
 

  render() {
    return(
    <tr>
     
      
	    <td className="td3">{this.props.sancion.codigo}</td>	
      <td className="td3" >{this.props.sancion.nombres} {this.props.sancion.apePat} {this.props.sancion.apeMat}</td>
      <td className="td3" >{this.props.sancion.inicio.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3-$2-$1')}</td>
      <td className="td3" >{this.props.sancion.fin.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3-$2-$1')}</td>
      <td className="td3">{this.props.sancion.nombreSancion}</td>
	  </tr>
    )
  }
}
//<td className="td">{this.props.pago.idRec}</td>
//<td className="td">{this.props.pago.alumno.idAlum}</td>
export default SancionesRow;