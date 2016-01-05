const CHOOSE_READER = 'striim/sources/CHOOSE_READER';
const CHOOSE_PARSER = 'striim/sources/CHOOSE_PARSER';
const CHANGE = 'striim/sources/CHANGE';

const initialState = {
  reader: null,
  parser: null,
  app: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_READER:
      return {
        ...state,
        load: false,
        reader: state.reader
      };
    case CHOOSE_PARSER:
      return {
        ...state,
        parser: state.parser
      };
    case CHANGE:
      return {
        ...state
      };
    default:
      return state;
  }
}

