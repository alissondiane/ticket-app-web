import React from 'react'
import SancionesRow from './Sanciones-Row'
import TableHeaderSanciones from './Table-Header-Sanciones'

class SancionesList extends React.Component {

  render() {
    if(this.props.listado.length >0){
      return (
      <table className="table">
      <TableHeaderSanciones/>
        <tbody>
          {
            this.props.listado.map((sancion) => {
              return <SancionesRow  key={sancion.toString()} 
              sancion={ sancion} />
            })
          }
        </tbody>
        </table>
    )}
    else{
      return <div className="mensaje centrar">No se encontraron datos</div>
    }
  }
}

export default SancionesList;