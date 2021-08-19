import { CHANGE_FORM } from "../types";

const initialState = {
  form: {
    input: '',
    category: 'all',
    sort: 'relevance',
  }
}

export const formReducer = (state = initialState, action) => {
  const { inputValue='', categoryValue='all', sortValue='relevance' } = action;

  switch (action.type) {
    case CHANGE_FORM:
      return {
        ...state,
        form: {
          input: inputValue,
          category: categoryValue,
          sort: sortValue,
        },
      }
    default: return state;
  }
}