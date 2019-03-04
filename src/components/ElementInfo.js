import React from 'react';
import { connect } from 'react-redux';
import { addElement } from '../actions/elementActions';

const ElementInfo = ({ dispatch, statusInfo }) => {
    let inputName, taDescription, display
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
            <form onSubmit={e => {
                e.preventDefault();
                dispatch(addElement(inputName.value, taDescription.value));
            }}>
                <div className="form-group">
                    <div className="row">
                        <label>Nombre:</label>
                        <input type="text" className="form-control" ref={node => inputName = node} />
                    </div>
                    <div className="row">
                        <label>Descripción:</label>
                        <textarea rows="7" className="form-control" placeholder="Descripción del elemento" ref={node => taDescription = node}></textarea>
                    </div>
                    <div className="row">
                        <button>Cancelar</button>
                        <button type="submit">Guardar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default connect()(ElementInfo);