import {
  CHANGE_FORM,
  FETCH_BOOKS,
  HIDE_LOADER,
  SHOW_LOADER,
  ACTIVATED_BOOKPAGE,
  DISACTIVATED_BOOKPAGE
} from "../types";

const initialState = {
  form: {
    input: '',
    category: 'all',
    sort: 'relevance',
  },
  books: {
    totalItems: 0,
    items: [],
  },
  loading: false,
  bookPageActive: false, 
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
    case FETCH_BOOKS:
      return {
        ...state,
        books: {
          totalItems: state.books.totalItems === 0
            ? action.payload.totalItems
            : state.books.totalItems,
          items: state.books.items.concat(action.payload.items)
        }
      }
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      }
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      }
    case ACTIVATED_BOOKPAGE:
      return {
        ...state,
        bookPageActive: true,
      }
    case DISACTIVATED_BOOKPAGE:
      return {
        ...state,
        bookPageActive: false,
      }
      default: return state;
  }
}