const INITIAL_STATE = "";

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_INFORMATION':
      return action.name;
    default:
      return state;
  }
}

export default listReducer;