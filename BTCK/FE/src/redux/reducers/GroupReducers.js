import * as types from "../constants";

const initialState = {
  groups: [],
  page: 1,
  size: 5,
  totalSize: 0,

  // search
  search: null,

  // selected rows
  selectedRows: [],
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.GET_LIST_GROUP:
      return {
        ...state,
        groups: actions.payload.groups,
        totalSize: actions.payload.totalSize,
        page: actions.payload.page,
        // userInfor: action.payload
        // search
        search: actions.payload.search,
      };

    case types.GET_LIST_GROUP_SELECETED_ROWS:
      return {
        ...state,
        selectedRows: actions.payload,
      };
    default:
      return state;
  }
}
