import React from 'react'

class MenuRow extends React.Component {
 

  render() {
    return(
    <tr>
      <td className="td">{this.props.modelo.nombre_cliente}</td>
	  <td className="td">{this.props.modelo.apellido_cliente}</td>	
      <td className="td">{this.props.modelo.telefono_cliente}</td>
	  </tr>
    )
  }
}

export default MenuRow;