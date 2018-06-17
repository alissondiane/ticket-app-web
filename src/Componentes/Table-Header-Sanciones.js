import React from 'react'

class TableHeaderSanciones extends React.Component {

  render() {
    return(
    <thead>
			<tr>       
                <th className="th3">Nombres y Apellidos</th>           
                <th className="th3">Código</th>
                <th className="th3">Fecha-Inicio</th>
                <th className="th3">Fecha-Fin</th>
                <th className="th3">Nombre Sanción</th>
              
            </tr>
	  </thead>
    )
  }
}

export default TableHeaderSanciones;