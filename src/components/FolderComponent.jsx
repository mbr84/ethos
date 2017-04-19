import React                    from 'react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';

import {
  toggleFolder,
  selectFolder
}                             from '../actions/folderActions'

const Folder = ({
  subFolders,
  files,
  isExpanded,
  path,
  name,
  toggleFolder,
  selectFolder
}) => {
  const expansionClass = isExpanded ? "collapse-icon" : "expand-icon"
  const subFolderTree = subFolders.map((folder, idx) => (
    <li>
      <Folder
        key={idx}
        subFolders={folder.get('subFolders')}
        files={folder.get('files')}
        isExpanded={folder.get('isExpanded')}
        name={folder.get('name')}
        path={folder.get('path')}
      />
    </li>
  ))

  const fileTree = files.map((file, idx) => (
    <li>
      <span className="file-icon"></span><span className="file-name">{file}</span>
    </li>
  ))

  return (
    <div>
      <div className="entry-line">
        <span
          className={expansionClass}
          onClick={() => toggleFolder(path)}
        ></span>
        <span className="folder-icon"></span>
        {name}
      </div>
      {isExpanded && subFolderTree // && fileTree
      }
    </div>
  )

}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({
      toggleFolder,
      selectFolder
    }, dispatch
  )}
}

Folder.propTypes = {
  subFolders: React.PropTypes.object,
  files: React.PropTypes.object,
  isExpanded: React.PropTypes.bool,
  path: React.PropTypes.array.isRequired,
  name: React.PropTypes.string.isRequired,
  actions: React.PropTypes.object,
}

export default connect(
  mapDispatchToProps
)(Folder)
