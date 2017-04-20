import React                from 'react';
import { truncateFilename } from '../utils/nameUtils'

export default class File extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectionClass: "" }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const selectionClass = this.state.selectionClass === "" ? "selected" : ""
    this.setState({ selectionClass })
  }
  render () {
    return (
      <li className={this.state.selectionClass} onClick={this.handleClick}>
        <span className="name">
          <span className="file-icon"></span>
          <span className="file-name"></span>
          {truncateFilename(this.props.name)}
        </span>
      </li>
    )
  }
}
