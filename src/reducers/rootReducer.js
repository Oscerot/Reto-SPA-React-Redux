
const initState = {
    elements: {
        '1': { name: "nombre 1", description: "lol 1" },
        '2': { name: "nombre 2", description: "lol 2" },
        '3': { name: "nombre 3", description: "lol 3" }
    },
    elementSelected: null,
    statusInfo: 0,
    name: null,
    description: null
};

const rootReducer = (state = initState, action) => { //lista de elementos vacía al iniciar la aplicación
    console.log(state);
    if (action.type === "DELETE_POST") {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id;
        });
        return {
            ...state,
            posts: newPosts
        };
    }
    else if (action.type === "ADD_NEW_ELEMENT") {
        return {
            ...state,
            statusInfo: 1
        };
    }
    else if (action.type === "ADD_ELEMENT") {
        let tempState = state.elements;
        tempState[action.id] = { name: action.name, description: action.description };
        return {
            ...state,
            elements: tempState
        };
    }
    return state;
};

export default rootReducer;
