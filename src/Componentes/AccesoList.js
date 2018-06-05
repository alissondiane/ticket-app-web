import React from 'react'
class AccesoList extends React.Component {
    
    render() { 
      if( this.props.listado.length>0){
      return (
        <p>     
        {
            this.props.listado.map((concepto) => {
              return <label key={concepto.toString()} className="row center-xs">
                <input
                className="checkbox1"
                name={concepto.nombre}
                value={concepto.nombre}
                type="checkbox" />
                <span>
                {concepto.nombre}
                </span>
            </label>
            })
          }
          
        </p>
      )}
      else{
        return <p className="text-center">Cargando conceptos</p>
      }
    }
  }
  export default AccesoList;