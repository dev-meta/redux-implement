let initState = {
    count: 0
}

export default function reducer(state, action) {
    if (!state) {
        state = initState;
    }
    switch(action.type) {
        case 'INCREACEMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREACEMENT':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;   
    }
}