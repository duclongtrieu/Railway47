import { createSelector } from "@reduxjs/toolkit";

/** Selector **/
const groupSelector = (state) => state.Group;

const selectGroupSelector = createSelector(groupSelector, (state) => {
  return state.groups;
  // truoc dau ? la dieu kien, neu dung thi truyen vao k thi truyen vao sau :
  // return state.userInfo ? state.userInfo: [];
});

const selectPageSelector = createSelector(groupSelector, (state) => {
  return state.page;
});

const selectSizeSelector = createSelector(groupSelector, (state) => {
  return state.size;
});

const selectTotalSizeSelector = createSelector(groupSelector, (state) => {
  return state.totalSize;
});

const selectSearchSelector = createSelector(groupSelector, (state) => {
  return state.search;
});

const selectSelectedRowsSelector = createSelector(groupSelector, (state) => {
  return state.selectedRows;
});

/** function */
export const selectGroups = (state) => {
  return selectGroupSelector(state);
};
export const selectPage = (state) => {
  return selectPageSelector(state);
};
export const selectSize = (state) => {
  return selectSizeSelector(state);
};
export const selectTotalSize = (state) => {
  return selectTotalSizeSelector(state);
};
export const selectSearch = (state) => {
  return selectSearchSelector(state);
};

export const selectSelectedRows = (state) => {
  return selectSelectedRowsSelector(state);
};
