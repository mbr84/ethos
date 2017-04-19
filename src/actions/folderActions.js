export const TOGGLE_FOLDER = 'TOGGLE_FOLDER';
export const SELECT_FOLDER = 'SELECT_FOLDER';

export const toggleFolder = (path) => ({
  type: TOGGLE_FOLDER,
  path
});

export const selectFolder = (path) => ({
  type: SELECT_FOLDER,
});
