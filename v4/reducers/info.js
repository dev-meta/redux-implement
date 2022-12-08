let initState = {
    name: 'name',
    description: 'desc'
}

export default function reducer(state, action) {
    if(!state) {
        state = initState;
    }
    switch(action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'SET_DECREACEMENT':
            return {
                ...state,
                count: action.payload
            }
        default:
            return state;   
    }
}