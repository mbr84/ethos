export const TOGGLE_FOLDER = 'TOGGLE_FOLDER';
export const SELECT_FOLDER = 'SELECT_FOLDER';

export const toggleFolder = (id) => ({
  type: TOGGLE_FOLDER,
  path
});

export const selectFolder = (id) => ({
  type: SELECT_FOLDER,
});
