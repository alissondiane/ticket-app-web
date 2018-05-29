import React from 'react'

class MenuList extends React.Component {

    render() {
        return (
            <tbody>
                <tr>
                    <td className="th" >DESAYUNO</td>
<<<<<<< HEAD
                    <td className="td">
                        <div className="informacion">
=======
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[0].comidas[0].nombre)}>
>>>>>>> 54c9d7967d17e857d0d21cedf01a1f317a2b059a
                        <p>{this.props.listado[0].comidas[0].nombre}</p>
                        <p>Descripcion:{this.props.listado[0].comidas[0].descripcion}</p>
                        </div>
                        <div className="back right">
                        <button onClick={(e)=>this.props.modalSelectedOption(this.props.listado[0].comidas[0])}  className="btn-floating"><b><i className="material-icons">zoom_in</i></b></button>
                        </div>
                    </td>
<<<<<<< HEAD
                    <td className="td">
                        <div className="informacion">
=======
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[1].comidas[0].nombre)}>
>>>>>>> 54c9d7967d17e857d0d21cedf01a1f317a2b059a
                        <p>{this.props.listado[1].comidas[0].nombre}</p>
                        <p>Descripción:{this.props.listado[1].comidas[0].descripcion}</p>
                        </div>
                        <div className="back right">
        
                        <button  onClick={(e)=>this.props.modalSelectedOption(this.props.listado[1].comidas[0])}  className="btn-floating"><b><i className="material-icons">zoom_in</i></b></button>
                        </div>
                    </td>
<<<<<<< HEAD
                    <td className="td">
                        <div className="informacion">
=======
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[2].comidas[0].nombre)}>
>>>>>>> 54c9d7967d17e857d0d21cedf01a1f317a2b059a
                        <p>{this.props.listado[2].comidas[0].nombre}</p>
                        <p>Descripción:{this.props.listado[2].comidas[0].descripcion}</p>
                        </div>
                        <div className="back right">
                        <button  onClick={(e)=>this.props.modalSelectedOption(this.props.listado[2].comidas[0])} className="btn-floating"><b><i className="material-icons">zoom_in</i></b></button>
                        </div>
                    </td>
<<<<<<< HEAD
                    <td className="td">
                        <div className="informacion">
=======
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[3].comidas[0].nombre)}>
>>>>>>> 54c9d7967d17e857d0d21cedf01a1f317a2b059a
                        <p>{this.props.listado[3].comidas[0].nombre}</p>
                        <p>Descripción:{this.props.listado[3].comidas[0].descripcion}</p>
                        </div>
                        <div className="back right">
                        <button  onClick={(e)=>this.props.modalSelectedOption(this.props.listado[3].comidas[0])} className="btn-floating"><b><i className="material-icons">zoom_in</i></b></button>
                        </div>
                    </td>
<<<<<<< HEAD
                    <td className="td">
                        <div className="informacion">
=======
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[4].comidas[0].nombre)}>
>>>>>>> 54c9d7967d17e857d0d21cedf01a1f317a2b059a
                        <p>{this.props.listado[4].comidas[0].nombre}</p>
                        <p>Descripción:{this.props.listado[4].comidas[0].descripcion}</p>
                        </div>
                        <div className="back right">
                        <button onClick={(e)=>this.props.modalSelectedOption(this.props.listado[4].comidas[0])} className="btn-floating"><b><i className="material-icons">zoom_in</i></b></button>
                        </div>
                    </td>
<<<<<<< HEAD
                    <td className="td">
                        <div className="informacion">
=======
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[5].comidas[0].nombre)}>
>>>>>>> 54c9d7967d17e857d0d21cedf01a1f317a2b059a
                        <p>{this.props.listado[5].comidas[0].nombre}</p>

                        <p>Descripción:{this.props.listado[5].comidas[0].descripcion}</p>
                        </div>
                        <div className="back right">
                        <button  onClick={(e)=>this.props.modalSelectedOption(this.props.listado[5].comidas[0])} className="btn-floating"><b><i className="material-icons">zoom_in</i></b></button>
                        </div>
                    </td>
<<<<<<< HEAD
                    <td className="td">
                        <div className="informacion">
=======
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[6].comidas[0].nombre)}>
>>>>>>> 54c9d7967d17e857d0d21cedf01a1f317a2b059a
                        <p>{this.props.listado[6].comidas[0].nombre}</p>

                        <p>Descripción:{this.props.listado[6].comidas[0].descripcion}</p>
                        </div>
                        <div className="back right">
                        <button onClick={(e)=>this.props.modalSelectedOption(this.props.listado[6].comidas[0])} className="btn-floating"><b><i className="material-icons">zoom_in</i></b></button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="th" >ALMUERZO</td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[0].comidas[1].nombre)}>
                        <p>{this.props.listado[0].comidas[1].nombre}</p>
                        <p>Descripcion: {this.props.listado[0].comidas[1].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[1].comidas[1].nombre)}>
                        <p>{this.props.listado[1].comidas[1].nombre}</p>

                        <p>Descripción:{this.props.listado[1].comidas[1].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[2].comidas[1].nombre)}>
                        <p>{this.props.listado[2].comidas[1].nombre}</p>

                        <p>Descripción:{this.props.listado[2].comidas[1].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[3].comidas[1].nombre)}>
                        <p>{this.props.listado[3].comidas[1].nombre}</p>

                        <p>Descripción:{this.props.listado[3].comidas[1].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[4].comidas[1].nombre)}>
                        <p>{this.props.listado[4].comidas[1].nombre}</p>

                        <p>Descripción:{this.props.listado[4].comidas[1].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[5].comidas[1].nombre)}>
                        <p>{this.props.listado[5].comidas[1].nombre}</p>

                        <p>Descripción:{this.props.listado[5].comidas[1].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[6].comidas[1].nombre)}>
                        <p>{this.props.listado[6].comidas[1].nombre}</p>

                        <p>Descripción:{this.props.listado[6].comidas[1].descripcion}</p>
                    </td>
                </tr>
                <tr>
                    <td className="th" >CENA</td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[0].comidas[2].nombre)}>
                        <p>{this.props.listado[0].comidas[2].nombre}</p>
                        <p>Descripcion: {this.props.listado[0].comidas[2].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[1].comidas[2].nombre)}>
                        <p>{this.props.listado[1].comidas[2].nombre}</p>

                        <p>Descripción:{this.props.listado[1].comidas[2].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[2].comidas[2].nombre)}>
                        <p>{this.props.listado[2].comidas[2].nombre}</p>

                        <p>Descripción:{this.props.listado[2].comidas[2].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[3].comidas[2].nombre)}>
                        <p>{this.props.listado[3].comidas[2].nombre}</p>

                        <p>Descripción:{this.props.listado[3].comidas[2].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[4].comidas[2].nombre)}>
                        <p>{this.props.listado[4].comidas[2].nombre}</p>

                        <p>Descripción:{this.props.listado[4].comidas[2].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[5].comidas[2].nombre)}>
                        <p>{this.props.listado[5].comidas[2].nombre}</p>

                        <p>Descripción:{this.props.listado[5].comidas[2].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[6].comidas[2].nombre)}>
                        <p>{this.props.listado[6].comidas[2].nombre}</p>

                        <p>Descripción:{this.props.listado[6].comidas[2].descripcion}</p>
                    </td>
                </tr>
            </tbody>
        )
    }
}

export default MenuList