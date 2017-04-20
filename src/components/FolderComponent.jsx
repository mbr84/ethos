import React                    from 'react';
import File                     from './File'
import { truncateFilename }    from '../utils/nameUtils'

class Folder extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isExpanded: false, selectionClass: "entry-line" }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange() {
    console.log(123)
    const isExpanded = !this.state.isExpanded
    this.setState({ isExpanded })
  }

  handleClick() {
    const selectionClass = this.state.selectionClass === "entry-line" ? "entry-line selected" : "entry-line"
    this.setState({ selectionClass })
  }

  render() {
    const folderClass = this.props.private ? "folder-icon-private" : "folder-icon"
    const expansionClass = this.state.isExpanded ? "collapse-icon" : "expand-icon"
    const subFolderTree = this.props.subFolders.map((folder, idx) => (
      <li>
        <Folder
          key={idx}
          store={this.props.store}
          subFolders={folder.get('subFolders')}
          files={folder.get('files')}
          name={folder.get('name')}
          private={folder.get('private')}
        />
      </li>
    ))

    const fileTree = this.props.files.map((file, idx) => (
      <File name={file} key={idx} />
    ))

    return (
      <div>
        <div className={this.state.selectionClass}>
          <span
            className={expansionClass}
            onClick={this.handleChange}
          ></span>
        <span onClick={this.handleClick} className="name">
          <span className={folderClass}></span>
          &nbsp;&nbsp;{truncateFilename(this.props.name)}
        </span>
        </div>
        {this.state.isExpanded && <ul>{subFolderTree}</ul>}
        {this.state.isExpanded && <ul>{fileTree}</ul>}
      </div>
    )
  }

}

Folder.propTypes = {
  subFolders: React.PropTypes.object,
  files: React.PropTypes.array,
  name: React.PropTypes.string.isRequired,
  actions: React.PropTypes.object,
}

export default Folder
