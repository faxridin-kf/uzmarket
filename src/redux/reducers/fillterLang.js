const initialState = {
  sortBy: {
    type: 'Русский',
    order: 'desc',
  },
};

const filters = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};

export default filters;