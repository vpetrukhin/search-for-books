import { ACTIVATED_BOOKPAGE, CHANGE_FORM, DISACTIVATED_BOOKPAGE, FETCH_BOOKS, HIDE_LOADER, SHOW_LOADER } from "./types";

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?';

export function changeForm(values) {
  return {
    type: CHANGE_FORM,
    inputValue: values.input,
    categoryValue: values.category,
    sortValue: values.sort,
  };
};
export function showLoader() {
  return { type: SHOW_LOADER };
}
export function hideLoader() {
  return { type: HIDE_LOADER };
}
export function fetchBooks(searchValues) {
  const { input, category = 'all', sort = 'relevance' } = searchValues;
  return async dispatch => {
    dispatch(showLoader());
    const res = await fetch(`${BASE_URL}q=${input}+intitle&${category}+subject&orderBy=${sort}&maxResults=30`);
    const json = await res.json();

    const booksPayload = await {
      totalItems: json.totalItems,
      items: json.items.map(item => {
        return {
          id: item.id,
          smallImage: item.volumeInfo.imageLinks.smallThumbnail,
          bigImage: item.volumeInfo.imageLinks.thumbnail,
          categories: 'categories' in item.volumeInfo
            ? item.volumeInfo.categories[0]
            : '',
          title: item.volumeInfo.title,
          authors: 'authors' in item.volumeInfo
            ?  item.volumeInfo.authors.join(',')
            : '',
          description: item.volumeInfo.description,
        }
      }) 
    }

    dispatch({ type: FETCH_BOOKS, payload: booksPayload })
    dispatch(hideLoader());
  }
}
export function activeBookPage() {
  return { type: ACTIVATED_BOOKPAGE };
}
export function disactiveBookPage() {
  return { type: DISACTIVATED_BOOKPAGE }
}

