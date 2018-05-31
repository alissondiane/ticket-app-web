import React from 'react'

class TableHeaderNT extends React.Component {

  render() {
    return(
    <thead>
			      <tr>      
                <th className="thNT">NIVEL</th>           
                <th className="thNT">TURNO</th>
                <th className="thNT">HORA_INICIO</th>
                <th className="thNT">HORA_FIN</th>
                <th className="thNT">NRO_TICKETS</th>
            </tr>
	  </thead>
    )
  }
}

export default TableHeaderNT
