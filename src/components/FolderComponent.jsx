import React                    from 'react';

class Folder extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isExpanded: false }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    console.log(123)
    const isExpanded = !this.state.isExpanded
    this.setState({ isExpanded })
  }

  render() {
    const expansionClass = this.state.isExpanded ? "collapse-icon" : "expand-icon"
    const subFolderTree = this.props.subFolders.map((folder, idx) => (
      <li>
        <Folder
          key={idx}
          store={this.props.store}
          subFolders={folder.get('subFolders')}
          files={folder.get('files')}
          name={folder.get('name')}
        />
      </li>
    ))

    const fileTree = this.props.files.map((file, idx) => (
      <li>
        <span className="file-icon"></span><span className="file-name"></span>{file}
      </li>
    ))

    return (
      <div>
        <div className="entry-line">
          <span
            className={expansionClass}
            onClick={this.handleChange}
          ></span>
          <span className="folder-icon"></span>
          &nbsp;&nbsp;{this.props.name}
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
