import React from 'react';
import { Provider } from 'react-redux';
import Folder from './components/FolderComponent'
import './App.css';

const App = ({ store }) => {
  const state = store.getState()
  return (
    <Provider store={store}>
      <Folder
        name="body"
        isExpanded={true}
        subFolders={state.getIn(['body', 'subFolders'])}
        files={state.getIn(['body', 'files'])}
        path={state.getIn(['body', 'path'])}
      />
    </Provider>
  )
}


export default App
