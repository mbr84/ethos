import React from 'react';
import { Provider, connect } from 'react-redux';
import Folder from './components/FolderComponent'
import './App.css';

const App = ({ state, store }) => {
  // const state = store.getState()
  return (
    <Provider store={store}>
      <Folder
        store={store}
        name="body"
        subFolders={state.getIn(['body', 'subFolders'])}
        files={state.getIn(['body', 'files'])}
        path={state.getIn(['body', 'path'])}
      />
    </Provider>
  )
}

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps)(App);
