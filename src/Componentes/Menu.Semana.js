import React from 'react'
import TableHeaderMenuList from './Table-Header-MenuList'

class MenuList extends React.Component {

    render() {
       
            if(this.props.listado.length>0){
                return(
            <div>
            <TableHeaderMenuList />
            <tbody>
                 <tr>
                    <td className="th" >DESAYUNO</td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[0].lunes[0])}>
                        <p>{this.props.listado[0].lunes[0].nombre}</p>
                        <p>Descripcion: {this.props.listado[0].lunes[0].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[1].martes[0])}>
                        <p>{this.props.listado[1].martes[0].nombre}</p>
                        <p>Descripción:{this.props.listado[1].martes[0].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[2].miércoles[0])}>
                        <p>{this.props.listado[2].miércoles[0].nombre}</p>
                        <p>Descripción:{this.props.listado[2].miércoles[0].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[3].jueves[0])}>
                        <p>{this.props.listado[3].jueves[0].nombre}</p>

                        <p>Descripción:{this.props.listado[3].jueves[0].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[4].viernes[0])}>
                        <p>{this.props.listado[4].viernes[0].nombre}</p>

                        <p>Descripción:{this.props.listado[4].viernes[0].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[5].sábado[0])}>
                        <p>{this.props.listado[5].sábado[0].nombre}</p>

                        <p>Descripción:{this.props.listado[5].sábado[0].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[6].domingo[0])}>
                        <p>{this.props.listado[6].domingo[0].nombre}</p>

                        <p>Descripción:{this.props.listado[6].domingo[0].descripcion}</p>
                    </td>
                </tr>
                <tr>
                    <td className="th" >ALMUERZO</td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[0].lunes[1])}>
                        <p>{this.props.listado[0].lunes[1].nombre}</p>
                        <p>Descripcion: {this.props.listado[0].lunes[1].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[1].martes[1])}>
                        <p>{this.props.listado[1].martes[1].nombre}</p>

                        <p>Descripción:{this.props.listado[1].martes[1].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[2].miércoles[1])}>
                        <p>{this.props.listado[2].miércoles[1].nombre}</p>

                        <p>Descripción:{this.props.listado[2].miércoles[1].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[3].jueves[1])}>
                        <p>{this.props.listado[3].jueves[1].nombre}</p>

                        <p>Descripción:{this.props.listado[3].jueves[1].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[4].viernes[1])}>
                        <p>{this.props.listado[4].viernes[1].nombre}</p>

                        <p>Descripción:{this.props.listado[4].viernes[1].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[5].sábado[1])}>
                        <p>{this.props.listado[5].sábado[1].nombre}</p>

                        <p>Descripción:{this.props.listado[5].sábado[1].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[6].domingo[1])}>
                        <p>{this.props.listado[6].domingo[1].nombre}</p>

                        <p>Descripción:{this.props.listado[6].domingo[1].descripcion}</p>
                    </td>
                </tr>
                <tr>
                    <td className="th" >CENA</td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[0].lunes[2])}>
                        <p>{this.props.listado[0].lunes[2].nombre}</p>
                        <p>Descripcion: {this.props.listado[0].lunes[2].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[1].martes[2])}>
                        <p>{this.props.listado[1].martes[2].nombre}</p>

                        <p>Descripción:{this.props.listado[1].martes[2].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[2].miércoles[2])}>
                        <p>{this.props.listado[2].miércoles[2].nombre}</p>

                        <p>Descripción:{this.props.listado[2].miércoles[2].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[3].jueves[2])}>
                        <p>{this.props.listado[3].jueves[2].nombre}</p>

                        <p>Descripción:{this.props.listado[3].jueves[2].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[4].viernes[2])}>
                        <p>{this.props.listado[4].viernes[2].nombre}</p>

                        <p>Descripción:{this.props.listado[4].viernes[2].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[5].sábado[2])}>
                        <p>{this.props.listado[5].sábado[2].nombre}</p>

                        <p>Descripción:{this.props.listado[5].sábado[2].descripcion}</p>
                    </td>
                    <td className="td"
                        onClick={(e) => this.props.modalSelectedOption(this.props.listado[6].domingo[2])}>
                        <p>{this.props.listado[6].domingo[2].nombre}</p>

                        <p>Descripción:{this.props.listado[6].domingo[2].descripcion}</p>
                    </td>
                </tr>
            </tbody>
            </div>
        )}
        else{
            return <p className="text-center">No hay registros</p>
        }
    }
}

export default MenuList