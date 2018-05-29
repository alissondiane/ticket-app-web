import React from 'react';
import Modal from 'react-modal';
import { Checkbox } from 'react-bootstrap';
import swal from 'sweetalert';
import NIVELTURNO from './Data-NivelTurno';
import NivelTurnoList from './NivelTurno-List';

class ComidaDiaModal extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
            <div>
                <Modal
                    isOpen={this.props.modalOption}
              onRequestClose={this.props.modalClearOption}
                    //contentLabel="Selected Option"
                   //closeTimeoutMS={200}
                   //className="modal"
                    >
    <div className="margen_top">
            <div className="SplitPane row">
                
                <div className="col-xs-12">
                <div className=" margen_top" ><h3>Detalle comida<i className="material-icons logo1">restaurant</i></h3></div>
                </div>
            </div>
        <div className="SplitPane row">
            
            <div className="col-xs-6  margen_top ">
                <div>
                    <p className="h2" >Detalle</p>
                    <br />
                    <hr/>
                    <label>Dia: {this.props.modalComida.dia}</label>
                    <label>Tipo de comida:{this.props.modalComida.comidaTipo}</label>
                    <label>Nombre:{this.props.modalComida.nombre}</label>
                    <label>Descripcion: {this.props.modalComida.descripcion}</label>
                    <hr/>
                </div>
                <div>
                    <p className="h2" >Turnos</p>
                    <br />
                    <hr/>
                    <div className="scroll center-xs">
                    <NivelTurnoList listado={NIVELTURNO}/>
                    </div>
                    <hr/>
                </div>
            </div>
            <div className="col-xs-6 margen_top" >
                <div>
                    <p className="h2" >Accesos</p>
                    <br />
                    <hr/>
                    <label><input class="filled-in" name="Profesor" type="checkbox"  id="myCheck" /><span>Profesor</span></label>
                    <label><input class="filled-in" name="Alumno" type="checkbox"  id="myCheck" /><span>Alumno</span></label>
                    <label><input class="filled-in" name="Residente" type="checkbox"  id="myCheck" /><span>Residente</span></label>
                    <hr/>
                </div>

                
            
            </div>
           
            
        </div>
        <div className="SplitPane row center">
           
                <div className="col-xs-4 margen_top"  >
                <button onClick={(e) => { swal("Edicion habilitada!","","success");e.preventDefault();}} className="waves-effect waves-light btn-small botonazul2 right" type="submit">Editar<i className="material-icons left">mode_edit</i></button>
                </div>
                <div className="col-xs-4 margen_top" >
                <button className="waves-effect waves-light btn-small botonazul2 right" onClick={(e) => { swal("Cambios guardados exitosamente!","","success");e.preventDefault();}} >Guardar<i className="material-icons left">save</i></button>
                </div>
                <div className="col-xs-4 margen_top">
                <button   onClick={this.props.modalClearOption} className="waves-effect waves-light btn-small botonazul2 red right">Cerrar<i className="material-icons left">clear</i></button>
                </div>
        </div>       
   </div>
    </Modal>
           </div>
        )
   }
}


export default ComidaDiaModal;