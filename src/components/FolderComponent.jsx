import React, { PropTypes }     from 'react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import FolderDisplay            from './FolderDisplay'

import {
  toggleFolder,
  selectFolder
}                             from './actions/folderActions'

const Folder = ({
  subFolders,
  files,
  isExpanded,
  path,
  name,
  actions: {
    toggleFolder,
    selectFolder
  }
}) => {
  const expansionClass = isExpanded ? "collapse-icon" : "expand-icon"
  const subFolderTree = subFolders.map((folder, idx) => (
    <li>
      <Folder
        key={idx}
        subFolders={folder.subFolders}
        files={subFolder.files}
      />
    </li>
  ))
  const fileTree = files.map((file, idx) => (
    <li>
      <span class="file-icon"></span><span class="file-name">{file}</span>
    </li>
  ))

  return (
    <div>
      <div class="entry-line">
        <span
          class={expansionClass}
          onClick={() => toggleFolder(path)}
        ></span>
        <span class="folder-icon"></span>
        {name}
      </div>
      {isExpanded &&
        subFolderTree
        fileTree
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

const Folder.propTypes = {
  subFolders: React.PropTypes.object,
  files: React.PropTypes.object,
  isEpanded: React.PropTypes.boolean,
  path: React.PropTypes.array.isRequired,
  name: React.PropTypes.string.isRequired,
  actions: React.PropTypes.object,
}

export default connect(
  mapDispatchToProps
)(Folder)
