import React from 'react'

class TableHeaderMenuList extends React.Component {

  render() {
    return(
    <thead>
			<tr>      
                <th></th>    
                <th className="th">LUNES</th>           
                <th className="th">MARTES</th>
                <th className="th">MIERCOLES</th>
                <th className="th">JUEVES</th>
                <th className="th">VIERNES</th>
                <th className="th">SABADO</th>
                <th className="th">DOMINGO</th>
            </tr>
	  </thead>
    )
  }
}

export default TableHeaderMenuList