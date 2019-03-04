import React from "react";
import { connect } from 'react-redux';
import { deleteElement } from '../actions/elementActions';
import { selectElement } from '../actions/elementActions';

//Representa cada elemento que aparece en color gris en la lista
const Element = ({ id, name, dispatch }) => {
  return (
    <div className="element">
      <p onClick={() => //Si da clic en el nombre, se abre la ventana de editar
        dispatch(selectElement(id))}>{name}</p>
      <a onClick={() => //Si da clic en el botón de basura, se elimina el elemento
        dispatch(deleteElement(id))
      }><span className="glyphicon glyphicon-trash" /></a>
    </div >
  );
}

export default connect()(Element);
