import * as types from "../constants";

export function getListGroupAction(groups, totalSize, page, search) {
  return {
    type: types.GET_LIST_GROUP,
    payload: {
      groups,
      totalSize,
      page,

      //search
      search,
    },
  };
}

export function updateSelectedRowsAction(selectedRows) {
  console.log(selectedRows);
  return {
    type: types.GET_LIST_GROUP_SELECETED_ROWS,
    payload: {
      selectedRows,
    },
  };
}
