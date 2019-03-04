import React, { Component } from 'react';
import { connect } from 'react-redux';

class ElementInfo extends Component {
    render() {
        const { statusInfo } = this.props;
        let display;
        if (statusInfo === 0) {
            display = "none";
        } else if (statusInfo === 1) {
            display = "block";
        } else {
            display = "block";
        }
        return (
            <div className="elementinfo section" style={{ display: display }}>
                <h2>Estás agregando un nuevo elemento</h2>
                <form>
                    <div className="form-group">
                        <div className="row">
                            <label>Nombre:</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="row">
                            <label>Descripción:</label>
                            <textarea rows="7" className="form-control" placeholder="Descripción del elemento"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <a className="btn btn-danger">Cancelar</a>
                        <a className="btn btn-success">Guardar</a>

                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        statusInfo: state.statusInfo
    };
};

export default connect(mapStateToProps)(ElementInfo);