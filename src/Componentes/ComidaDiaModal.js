import React from 'react';
import Modal from 'react-modal';
import { Checkbox } from 'react-bootstrap';
import swal from 'sweetalert';
import NIVELTURNO from './Data-NivelTurno';
import NivelTurnoList from './NivelTurno-List';
import TableHeaderNT  from './Table-Header-NT';

class ComidaDiaModal extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            bloqueoEditar: true,
            modalComida: [],
            dia: "",
            comidaTipo: "",
            nombre: "",
            descripcion: "",
            numeroRaciones:0,
            inicioReserva:"",
            finReserva:"",
            idComida:0,
            ListadoNivelTurno :[]
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.modalComida !== this.props.modalComida) {
            this.setState((prevState)=>({
                dia: this.props.modalComida.dia,
                comidaTipo: this.props.modalComida.comidaTipo,
                nombre: this.props.modalComida.nombre,
                descripcion: this.props.modalComida.descripcion,
                numeroRaciones: this.props.modalComida.numeroRaciones,
                inicioReserva: this.props.modalComida.inicioReserva,
                finReserva: this.props.modalComida.finReserva,
                idComida : this.props.modalComida.idComida
            }))
        }
    }

    onSubmit=(e)=>{
        //guardamos los cambios
        
        console.log("Actualizando una comida");
        /*
        fetch('http://',
        {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",//cambiar a metodo PUT de actualizacion
        body: JSON.stringify(
          {
            "id_comida": this.state.idComida,
            "descripcion": this.state.descripcion,
            "nombre": this.state.nombre,
            "num_raciones": this.state.numeroRaciones,
            "dia": this.state.dia,
            "comida_tipo":this.state.comidaTipo,
            "inicio_reserva":this.state.inicioReserva,
            "fin_reserva":this.state.finReserva
     }
          
        )
    })
    .then((response) => {
      return response.json()
      })
    .then((data) => {
      console.log("DATA QUE DEVUELVE EL POST")
      console.log(data)
      swal("Comida actualizada exitosamente!", "", "success");
     
      })
      .catch(error => {
          swal("Error al actualizar!", "", "error");
          console.error(error)
    });
    
    //Actualizar nivel-turno 
    //Actualizamos uno
    fetch('http://',
        {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",//cambiar a metodo PUT de actualizacion
        body: JSON.stringify(
          {
            "id_nt": this.state.idComida,
            "id_comida": this.state.descripcion,
            "nivel": this.state.nombre,
            "turno": this.state.numeroRaciones,
            "hora_inicio": this.state.dia,
            "hora_fin":this.state.comidaTipo,
            "num_tickets":this.state.inicioReserva,
     }
          
        )
    })
    .then((response) => {
      return response.json()
      })
    .then((data) => {
      console.log("DATA QUE DEVUELVE EL POST")
      console.log(data)
      swal("Comida actualizada exitosamente!", "", "success");
     
      })
      .catch(error => {
          swal("Error al actualizar!", "", "error");
          console.error(error)
    });

*/
var check = [];
var check2 = [];
var opcionesSeleccionadas = [];
var listadoAlumnoPrograma = [];

check = document.getElementsByClassName("nroTickets");

console.log("Numeros de tickets editados");
for (var item of check) {
 opcionesSeleccionadas.push(item.id);
 console.log("nro ticket recibido");
 console.log(item.id);

}
console.log(opcionesSeleccionadas);
/*
this.setState({ListadoNivelTurno: NIVELTURNO})

var PagosActualizados = this.state.

    for (let i = 0; i < PagosActualizados.length; i++) {
        var ap = listadoAlumnoPrograma[i];
        if(ap != null){
          var listadoRec = { 
          "idAlumno" : PagosActualizados[i].idAlum,
          "codAlumno" :ap.codAlumno,
          "idPrograma":ap.idPrograma
        }
        pagoinsertar.push(listadoRec);
        }
    }
    */
        //swal("Cambios guardados exitosamente!", "", "success");
        e.preventDefault();
        
      }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.modalOption}
                    onRequestClose={this.props.modalClearOption}
                    //contentLabel="Selected Option"
                    //closeTimeoutMS={100}
                //className="modal"
                >
                    <div className="margen_top">
                        <div className="SplitPane row">
                            
                            
                                <h3>Detalle comida {this.state.idComida}<i className="material-icons logo1">restaurant</i></h3>
                                <hr/>
                           
                        </div>
                       
                        <div className="SplitPane row">
                            <p className="h2" >Detalle</p>
                             <hr />     
                        </div>
                        <div className="SplitPane row center NT">
                            
                                  
                            <div className="col-xs-6  margen_top ">
                                <div>
                                    <div className="SplitPane row left">
                                    
                                  
                                    <div className="col-xs-4  margen_top ">
                                    <label>Nombre: </label>
                                    </div>
                                    <div className="col-xs-8  margen_top ">
                                            <input type="text"
                                            value={this.state.nombre} 
                                            disabled={this.state.bloqueoEditar}
                                            onChange={(e)=>{ this.setState({nombre: e.target.value}) }}/>
                                    </div>
                                    </div>
                                    <div className="SplitPane row left">
                                    
                                  
                                    <div className="col-xs-4  margen_top ">
                                    <label>Descripción: </label>
                                    </div>
                                    <div className="col-xs-8  margen_top ">
                                        
                                    
                                   
                                    <input type="text"
                                            value={this.state.descripcion} 
                                            disabled={this.state.bloqueoEditar}
                                            onChange={(e)=>{ this.setState({descripcion: e.target.value}) }}/>
                                    </div>
                                    </div>
                                    <div className="SplitPane row left">
                                    
                                  
                                    <div className="col-xs-4  margen_top ">
                                    <label>Tipo de comida: </label>
                                    </div>
                                    <div className="col-xs-8  margen_top ">
                                    
                                    <input type="text"
                                            value={this.state.comidaTipo} 
                                            disabled/>
                                    </div>
                                    </div>
                                    <div className="SplitPane row left">
                                    
                                  
                                    <div className="col-xs-4  margen_top ">
                                    <label>Dia: </label>
                                    </div>
                                    <div className="col-xs-8  margen_top ">
                                   
                                    <input type="text"
                                            value={this.state.dia} 
                                            disabled/>
                                    </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div className="col-xs-6 margen_top" >
                              <div>
                              <div className="SplitPane row left">
                                    
                                  
                                    <div className="col-xs-4  margen_top ">
                                    <label>N° Raciones: </label>
                                    </div>
                                    <div className="col-xs-8  margen_top ">
                                    
                                    <input type="text"
                                            value={this.state.numeroRaciones} 
                                            disabled/>
                                    </div>
                                    </div>
                                 <div className="SplitPane row left">
                                    
                                  
                                  <div className="col-xs-4  margen_top ">
                                  <label>Inicio-Reserva:</label>
                                  </div>
                                  <div className="col-xs-8  margen_top ">
                                  <input className="input" type="time"
                                            value={this.state.inicioReserva} 
                                            disabled={this.state.bloqueoEditar}
                                            onChange={(e)=>{ this.setState({inicioReserva: e.target.value}) }}/>
                                  </div>
                                  
                                  </div>
                                    
                                  <div className="SplitPane row left">
                                    
                                  
                                  <div className="col-xs-4  margen_top ">
                                  <label>Fin-Reserva: </label>
                                  </div>
                                  <div className="col-xs-8  margen_top ">
                                     <input type="time"
                                            value={this.state.finReserva} 
                                            disabled={this.state.bloqueoEditar}
                                            onChange={(e)=>{ this.setState({finReserva: e.target.value}) }}/>
                                  </div>
                                  </div>      
                              </div>

                            </div>
                           
                           
                        </div>
                        
                        <div className="SplitPane row">
                            <p className="h2" >Accesos</p>
                            <br/>
                            <hr />  
                          
                        </div>
                        
                         
                        <div className="SplitPane row center NT">

                            <div className="col-xs-6  margen_top ">
                                <div>
                                   
                                    <label><input class="filled-in" name="Profesor" type="checkbox" id="myCheck" checked disabled={this.state.bloqueoEditar} /><span>Profesor</span></label>
                                    <label><input class="filled-in" name="Alumno" type="checkbox" id="myCheck" disabled={this.state.bloqueoEditar} /><span>Alumno</span></label>
                                    <label><input class="filled-in" name="Residente" type="checkbox" id="myCheck" disabled={this.state.bloqueoEditar} /><span>Residente</span></label>
                                
                                </div>
                                
                            </div>
                            <div className="col-xs-6 margen_top" >
                             

                            </div>
                        </div>
                        <div className="SplitPane row">
                            <p className="h2" >Turnos</p>
                            <br/>
                            <hr />     
                        </div>
                        <div className="SplitPane row  NT center-xs">
                            <div className="  center-xs-12">
                                    <table className="  total tableNT">
                                        <TableHeaderNT/>
                                        <NivelTurnoList listado={NIVELTURNO} />
                                    </table>  
                            </div>
                                
                        </div>


                        
                        <div className="SplitPane row center">

                            <div className="col-xs-4 margen_top">
                                <button 
                                    disabled={!this.state.bloqueoEditar}
                                    onClick={(e) => { 
                                        swal("Edicion habilitada!", "", "success");
                                        this.setState(()=>({bloqueoEditar : false}))
                                        e.preventDefault();
                                    }} 
                                    className="waves-effect waves-light btn-large botonazul2" 
                                    type="submit">Editar<i className="material-icons left">mode_edit</i></button>
                            </div>
                            <div className="col-xs-4 margen_top" >
                                <button className="waves-effect waves-light btn-large botonazul2" 
                                disabled={this.state.bloqueoEditar}
                                onClick={this.onSubmit} 
                                >Guardar<i className="material-icons left">save</i></button>
                            </div>
                            <div className="col-xs-4 margen_top">
                                <button onClick={this.props.modalClearOption} className="waves-effect waves-light btn-large botonazul2 red">Cerrar<i className="material-icons left">clear</i></button>
                            </div>
                        </div>

                    </div>
                </Modal>
            </div>
        )
    }
}


export default ComidaDiaModal;
