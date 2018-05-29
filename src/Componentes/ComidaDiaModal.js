import React from 'react';
import Modal from 'react-modal';
import { Checkbox } from 'react-bootstrap';
import swal from 'sweetalert';
import NIVELTURNO from './Data-NivelTurno';
import NivelTurnoList from './NivelTurno-List';

class ComidaDiaModal extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            bloqueoEditar: true,
            modalComida: [],
            dia: "",
            comidaTipo: "",
            nombre: "",
            descripcion: ""
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.modalComida !== this.props.modalComida) {
            this.setState((prevState)=>({
                dia: this.props.modalComida.dia,
                comidaTipo: this.props.modalComida.comidaTipo,
                nombre: this.props.modalComida.nombre,
                descripcion: this.props.modalComida.descripcion
            }))
        }
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

                            <div className="col-xs-12">
                                <div className=" margen_top" ><h3>Detalle comida<i className="material-icons logo1">restaurant</i></h3></div>
                            </div>
                        </div>
                        <div className="SplitPane row">

                            <div className="col-xs-6  margen_top ">
                                <div>
                                    <p className="h2" >Detalle</p>
                                    <br />
                                    <hr />
                                    <label>Dia: 
                                        <input type="text"
                                            value={this.state.dia} 
                                            disabled={this.state.bloqueoEditar}
                                            onChange={(e)=>{ this.setState({dia: e.target.value.trim()}) }}/>
                                    </label>
                                    <label>Tipo de comida:
                                        <input type="text"
                                            value={this.state.comidaTipo} 
                                            disabled={this.state.bloqueoEditar}
                                            onChange={(e)=>{ this.setState({comidaTipo: e.target.value.trim()}) }}/>
                                    </label>
                                    <label>Nombre:
                                        <input type="text"
                                            value={this.state.nombre} 
                                            disabled={this.state.bloqueoEditar}
                                            onChange={(e)=>{ this.setState({nombre: e.target.value.trim()}) }}/>
                                    </label>
                                    <label>Descripcion: 
                                        <input type="text"
                                            value={this.state.descripcion} 
                                            disabled={this.state.bloqueoEditar}
                                            onChange={(e)=>{ this.setState({descripcion: e.target.value.trim()}) }}/>
                                    </label>
                                    <hr />
                                </div>
                                <div>
                                    <p className="h2" >Turnos</p>
                                    <br />
                                    <hr />
                                    <div className="scroll center-xs">
                                        <NivelTurnoList listado={NIVELTURNO} />
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div className="col-xs-6 margen_top" >
                                <div>
                                    <p className="h2" >Accesos</p>
                                    <br />
                                    <hr />
                                    <label><input class="filled-in" name="Profesor" type="checkbox" id="myCheck" /><span>Profesor</span></label>
                                    <label><input class="filled-in" name="Alumno" type="checkbox" id="myCheck" /><span>Alumno</span></label>
                                    <label><input class="filled-in" name="Residente" type="checkbox" id="myCheck" /><span>Residente</span></label>
                                    <hr />
                                </div>



                            </div>


                        </div>
                        <div className="SplitPane row center">

                            <div className="col-xs-4 margen_top"  >
                                <button 
                                    onClick={(e) => { 
                                        swal("Edicion habilitada!", "", "success");
                                        this.setState(()=>({bloqueoEditar : false}))
                                        e.preventDefault();
                                    }} 
                                    className="waves-effect waves-light btn-small botonazul2 right" 
                                    type="submit">Editar<i className="material-icons left">mode_edit</i></button>
                            </div>
                            <div className="col-xs-4 margen_top" >
                                <button className="waves-effect waves-light btn-small botonazul2 right" 
                                onClick={(e) => { 
                                    swal("Cambios guardados exitosamente!", "", "success");
                                    alert(this.state.dia)
                                    alert(this.state.comidaTipo)
                                    alert(this.state.nombre)
                                    alert(this.state.descripcion);
                                    e.preventDefault(); 
                                }} 
                                >Guardar<i className="material-icons left">save</i></button>
                            </div>
                            <div className="col-xs-4 margen_top">
                                <button onClick={this.props.modalClearOption} className="waves-effect waves-light btn-small botonazul2 red right">Cerrar<i className="material-icons left">clear</i></button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}


export default ComidaDiaModal;