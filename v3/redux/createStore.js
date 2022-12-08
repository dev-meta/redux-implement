export default function createStore(reducer, initialState) {
    let state = initialState;
    let listeners = [];
    function getState() {
        return state;
    }
    function subscribe(cb) {
        listeners.push(cb);
    }
    function dispatch(action) {
        state = reducer(state, action);
        for(let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }
    return {
        subscribe,
        getState,
        dispatch
    }
}
