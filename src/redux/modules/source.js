const PREVIEW = 'striim/sources/PREVIEW';
const SELECT = 'striim/source/SELECT';
const DESELECT = 'striim/source/DESELECT';

const initialState = {
  source: null,
  preview: false,
  reader: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PREVIEW:
      return {
        ...state,
        load: false
      };
    case SELECT:
      return {
        ...state,
        reader: state.reader
      };
    case DESELECT:
      return {
        ...state,
        reader: null
      };
    default:
      return state;
  }
}

