const initialState = {
  notes: []
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTES": {
      return {
        ...state,
        notes: action.payload
      };
    }
    case "UPDATE_NOTES": {
      return {
        ...state,
        notes: state.notes.push(action.payload)
      };
    }
    case "DELETE_NOTES": {
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      };
    }
    default: {
      return state;
    }
  }
};

export default notesReducer;
