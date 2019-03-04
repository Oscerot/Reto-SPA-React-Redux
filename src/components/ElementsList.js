import React from 'react';
import { connect } from 'react-redux';
import Element from './Element';
import { addNewElement } from '../actions/elementActions';

//Este es el div que aparece del lado izquierdo de la pantalla para mostrar todos los elementos actuales
const ElementsList = ({ elements, dispatch }) => {
    return (
        <div className="section">{ //Se utilizó "Object" porque se solicitó que elements fuera un objeto, no un arregol
            Object.keys(elements).map(function (key) {
                return <Element key={Number(key)} id={Number(key)} name={elements[key].name} />
            })
        }
            <div className="element">
                <p onClick={() =>
                    dispatch(addNewElement())}>Agregar Elemento</p>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        elements: state.elements
    };
};

export default connect(mapStateToProps)(ElementsList);