import { omit } from 'lodash'

const initState = {
    elements: {}, //Como se solicitó por correo electrónico, elements es un objeto, no un arreglo. Cada key del objeto se utilizará como ID
    selectedElement: null,
    statusInfo: 0  //0 para ninguna acción, 1 para agregar y 2 para editar 
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_ELEMENT': //Eliminar elemento del state
            return {
                ...state,
                elements: omit(state.elements, action.id),
                selectedElement: null,
                statusInfo: 0
            }
        case 'ADD_NEW_ELEMENT': //Mostrar ventana para ingresar nuevo elemento
            return {
                ...state,
                statusInfo: 1
            }
        case 'ADD_ELEMENT': //Guardar nuevo elemento en el state
            return {
                ...state,
                statusInfo: 0,
                elements: {
                    ...state.elements,
                    [action.id]: { name: action.name, description: action.description }
                }
            }
        case 'SELECT_ELEMENT': //Se muestran los datos de un elemento para editarlo
            return {
                ...state,
                statusInfo: 2,
                selectedElement: action.id
            }
        case 'EDIT_ELEMENT': //Se guardan los datos del elemento modificado
            return {
                ...state,
                statusInfo: 0,
                elements: {
                    ...state.elements,
                    [action.id]: {
                        ...state.elements[action.id], name: action.name, description: action.description
                    }
                }
            }
        default:
            return state
    }
};

export default rootReducer;
