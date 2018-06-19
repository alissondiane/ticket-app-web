import React from 'react'

class TableHeaderNT extends React.Component {

  render() {
    return(
    <thead>
			      <tr>      
                <th className="thNT">Nivel</th>           
                <th className="thNT">Turno</th>
                <th className="thNT">Hora-inicio</th>
                <th className="thNT">Hora-fín</th>
                <th className="thNT">Nro-Tickets</th>
            </tr>
	  </thead>
    )
  }
}

export default TableHeaderNT
