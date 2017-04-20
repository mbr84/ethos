import React from 'react';
import { Provider, connect } from 'react-redux';
import Folder from './components/FolderComponent'
import Footer from './components/Footer'
import './App.css';

const App = ({ state, store }) => {
  const title = state.getIn(['head', 'subFolders', 'title', 'files'])[0]
  return (
    <Provider store={store}>
      <div className="tree-view">
        <header className="title">{title}</header>
        <div className="label">Label</div>
        <div className="directory">
          <Folder
            store={store}
            name="head"
            subFolders={state.getIn(['head', 'subFolders'])}
            files={state.getIn(['head', 'files'])}
            private={state.getIn(['head', 'private'])}
          />
          <Folder
            store={store}
            name="body"
            subFolders={state.getIn(['body', 'subFolders'])}
            files={state.getIn(['body', 'files'])}
            private={state.getIn(['body', 'private'])}
          />
        </div>
        <Footer />
      </div>
    </Provider>
  )
}

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps)(App);
