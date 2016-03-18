const LOAD = 'redux-example/LOAD';
const LOAD_SUCCESS = 'redux-example/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/LOAD_FAIL';

const initialState = {
  loaded: false
};

export default function info(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      console.log('LOADING ', action);
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.info && globalState.info.loaded;
}

export function load() {
  console.log('EXPORTING LOAD', Date.now());
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/loadInfo')
  };
}
