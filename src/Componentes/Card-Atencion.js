import React from 'react'
class CardAtencion extends React.Component {
    
    render() { 
      if(this.props.listado!=null){
      return (
        <p>     
        <div className="mensaje">
      <div class="card  darken-1 vistaCard">
        <div class="card-content white-text">
          <span class="card-title">Alumno</span>
           <div class="row">
           <div className=" col-xs-6">
          <p>Nombre: {this.props.listado.nombres}</p>
          <p>Apellido Paterno: {this.props.listado.apePat}</p>
          <p>Apellido Materno: {this.props.listado.apeMat}</p>
          <p>Código:           {this.props.listado.codigo}</p>
            </div>
            <div className=" col-xs-6">
            
          <p>Nro ticket: {this.props.listado.idTicket}</p>
          <p>Nivel: {this.props.listado.nivel}</p>
          <p>Turno: {this.props.listado.turno}</p>
          <p>Estado: {this.props.listado.estado}</p>
            </div>
          
          
          </div>
        </div>
        <div class="card-action">
        </div>
      </div>
      </div>
        </p>
      )}
      else{
        return <div className="mensaje centrar">No se encontraron registros</div>
      }
    }
  }
  export default CardAtencion;