import React  from 'react';
import Moment from 'react-moment';

class FechaActual extends React.Component {

    render() {
        const dateToFormat = new Date();
        return (
            <Moment format="dddd DD MMMM YYYY" date={dateToFormat}></Moment>
        );
    }
}

export default FechaActual;