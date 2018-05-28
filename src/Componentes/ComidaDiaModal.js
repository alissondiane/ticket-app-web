import React from 'react';
import Modal from 'react-modal';
import { Checkbox } from 'react-bootstrap';
import swal from 'sweetalert'

const ComidaDiaModal = (props) => (
    <Modal
        isOpen={props.modalOption}
        onRequestClose={props.modalClearOption}
    //contentLabel="Selected Option"
    //closeTimeoutMS={200}
    //className="modal"
    >
    <div>
        <div className="SplitPane row">
            <div className="col-xs-6" margen_top>
                <div>
                    <p className="h2" >Detalle</p>
                    <br />
                    <hr/>
                    <label>Dia: ---------</label>
                    <label>Tipo de comida: ----------</label>
                    <label>Nombre: ----------</label>
                    <label>Descripcion: ----------</label>
                </div>
                <div>
                    <p className="h2" >Turnos</p>
                    <br />
                    <hr/>
                    <label>TURNO 1 - NIVEL 1</label>
                    <label>Hora inicio: ----</label>
                    <label>Hora fin: ----</label>
                    <label>Nro de tickets: -----</label>
                </div>
            </div>
            <div className="col-xs-6" margen_top>
                <div>
                    <p className="h2" >Accesos</p>
                    <br />
                    <hr/>
                    <label><input name="Profesor" type="checkbox"  id="myCheck" /><span>Profesor</span></label>
                    <label><input name="Alumno" type="checkbox"  id="myCheck" /><span>Alumno</span></label>
                    <label><input name="Residente" type="checkbox"  id="myCheck" /><span>Residente</span></label>
                    
                </div>

                <p>Prueba...{props.modalComida}</p>
            
            </div>
            <div className="SplitPane row">
            <div className="col-xs-6" margen_top >
            </div>
            <div className="col-xs-6" margen_top >
            
            <div className="SplitPane row">
            <div className="col-xs-6" margen_top >
            <button onClick={(e) => { swal("Edicion habilitada!","","success");e.preventDefault();}} className="waves-effect waves-light btn-large botonazul2 right" type="submit">Editar<i className="material-icons left">check</i></button>
            </div>
            <div className="col-xs-6" margen_top>
            <button className="waves-effect waves-light btn-large botonazul2 right" onClick={props.modalClearOption}>Guardar</button>
            </div>
            </div>
            </div>
            </div>

            
        </div>
       
        
               
   </div>
    </Modal>
);

export default ComidaDiaModal;