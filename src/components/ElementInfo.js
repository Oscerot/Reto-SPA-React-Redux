import React from 'react';
import { connect } from 'react-redux';
import { addElement } from '../actions/elementActions';
import { editElement } from '../actions/elementActions';

//Este es el div que aparece del lado derecho de la pantalla para agregar o modificar elementos
const ElementInfo = ({ dispatch, statusInfo, elements, selectedElement }) => {
    let inputNameNew, inputNameEdit, inputDescriptionNew, inputDescriptionEdit, displayAdd, displayEdit, message, name, description
    if (statusInfo === 0) { //Ningún elemento seleccionado
        displayAdd = "none";
        displayEdit = "none";
        message = "No has seleccionado ningún elemento";
        name = "";
        description = "";
    } else if (statusInfo === 1) { //Agregar un nuevo
        displayAdd = "block";
        displayEdit = "none";
        message = "Estás agregando un nuevo elemento";
        name = "";
        description = "";
    } else { //Editar uno existente
        displayAdd = "none";
        displayEdit = "block";
        message = "Estás editando un elemento";
        name = elements[selectedElement].name;
        description = elements[selectedElement].description;
    }

    return (
        <div className="elementinfo section">
            <div style={{ display: (displayAdd === 'block' || displayEdit === 'block') ? 'block' : 'none' }}>
                <h2>{message}</h2>
                <form onSubmit={e => {
                    e.preventDefault();
                    if (statusInfo === 1) {
                        dispatch(addElement(inputNameNew.value, inputDescriptionNew.value));
                        inputNameNew.value = "";
                        inputDescriptionNew.value = "";
                    } else {
                        dispatch(editElement(selectedElement, inputNameEdit.value, inputDescriptionEdit.value));
                    }
                }}>
                    <div className="form-group">
                        <div className="row">
                            <label>Nombre:</label>
                            <input ref={node => inputNameNew = node} style={{ display: displayAdd }} type="text" className="form-control" />
                            <input ref={node => inputNameEdit = node} defaultValue={name} style={{ display: displayEdit }} type="text" className="form-control" />
                        </div>
                        <div className="row">
                            <label>Descripción:</label>
                            <input ref={node => inputDescriptionNew = node} style={{ display: displayAdd }} className="form-control" />
                            <input ref={node => inputDescriptionEdit = node} defaultValue={description} style={{ display: displayEdit }} type="text" className="form-control" />
                        </div>
                        <div className="row">
                            <button>Cancelar</button>
                            <button type="submit">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
            <div style={{ display: (displayAdd === 'none' && displayEdit === 'none') ? 'block' : 'none' }}>
                <h2>{message}</h2>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        statusInfo: state.statusInfo,
        elements: state.elements,
        selectedElement: state.selectedElement
    };
};

export default connect(mapStateToProps)(ElementInfo);