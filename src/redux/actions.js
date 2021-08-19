import { CHANGE_FORM } from "./types";

export function changeForm(values) {
  console.log(values);
  return {
    type: CHANGE_FORM,
    inputValue: values.input,
    categoryValue: values.category,
    sortValue: values.sort,
  };
};