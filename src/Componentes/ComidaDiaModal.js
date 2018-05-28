import React from 'react';
import Modal from 'react-modal';
import { Checkbox } from 'react-bootstrap';

const ComidaDiaModal = (props) => (
    <Modal
        isOpen={props.modalOption}
        onRequestClose={props.modalClearOption}
    //contentLabel="Selected Option"
    //closeTimeoutMS={200}
    //className="modal"
    >
        <div className="SplitPane row">
            <div className="col-xs-6" margen_top>
                <div>
                    <h2>Detalle</h2>
                    <br />
                    <p>Dia: ---------</p>
                    <p>Tipo de comida: ----------</p>
                    <p>Nombre: ----------</p>
                    <p>Descripcion: ----------</p>
                </div>
                <div>
                    <br />
                    <h2>Turnos</h2>
                    <br />
                    <p>TURNO 1 - NIVEL 1</p>
                    <p>Hora inicio: ----</p>
                    <p>Hora fin: ----</p>
                    <p>Nro de tickets: -----</p>
                </div>
            </div>
            <div className="col-xs-6" margen_top>
                <div>
                    <br />
                    <h2>Accesos</h2>
                    <br />
                    <p>Profesor <input type="checkbox" id="myCheck" /> </p>
                    <p>Profesor <input type="checkbox" id="myCheck" /> </p>
                    <p>Profesor <input type="checkbox" id="myCheck" /> </p>
                </div>

                <p>Prueba...{props.modalComida}</p>
                <button className="button" onClick={props.modalClearOption}>Okay</button>
            </div>
        </div>
    </Modal>
);

export default ComidaDiaModal;