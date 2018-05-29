import React from 'react'
import NivelTurnoRow from './NivelTurno-Row'

class NivelTurnoList extends React.Component {

  render() {
    return (
        <div>
          {
            this.props.listado.map((nivelTurno) => {
              return <NivelTurnoRow key={nivelTurno.toString()} 
                                  nivelTurno={ nivelTurno} />
            })
          }
        </div>
    )
  }
}

export default NivelTurnoList