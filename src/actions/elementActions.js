let elementID = 0
export const addElement = (name, description) => ({ //Aquí es cuando en verdad de agrega un nuevo elemento al estado
    type: 'ADD_ELEMENT',
    id: elementID++, //Inicializamos elementID en 0 para que al agregar el primero, se agregue con ID = 1 
    name,
    description
})

export const addNewElement = () => ({ //Mostrar el componente ElementInfo para agregar nuevo elemento
    type: 'ADD_NEW_ELEMENT'
})

export const deleteElement = (id) => ({ //Eliminar elemento tras presionar el botón de basura
    type: 'DELETE_ELEMENT',
    id
})

export const selectElement = (id) => ({ //Mostrar datos del elemento cuando se halla dado clic en su nombre en la lista de elemento
    type: 'SELECT_ELEMENT',
    id
})

export const editElement = (id, name, description) => ({ //Guardar cambios hechos en el elemento que se editó
    type: 'EDIT_ELEMENT',
    id,
    name,
    description
})