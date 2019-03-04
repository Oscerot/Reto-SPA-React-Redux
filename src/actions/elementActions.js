let elementID = 0
export const addElement = (name, description) => ({
    type: 'ADD_ELEMENT',
    id: elementID++, //Inicializamos elementID en 0 para que al agregar el primero, se agregue con ID = 1 
    name,
    description
})

export const addNewElement = () => ({
    type: 'ADD_NEW_ELEMENT'
})