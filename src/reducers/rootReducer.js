
const initState = {
    elements: {
        '1': { body: "lol 1" },
        '2': { body: "lol 2" },
        '3': { body: "lol 3" }
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
    return state;
};

export default rootReducer;
