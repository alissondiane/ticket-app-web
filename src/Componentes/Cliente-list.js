import React from 'react'
import ClienteRow from './Cliente-Row'

class ClienteList extends React.Component {

  render() {
    return (
        <tbody>
          {
            this.props.listado.map((modelo) => {
              return <ClienteRow  key={modelo.toString()} 
                                  modelo={ modelo} />
            })
          }
        </tbody>
    )
  }
}

export default ClienteList