import './index.css'

import {Component} from 'react'

class EditableText extends Component {
  state = {
    textContent: '',
    renderResponse: true,
  }

  onChangeText = event => {
    this.setState({textContent: event.target.value})
  }

  onSave = () => {
    this.setState(prevState => ({renderResponse: !prevState.renderResponse}))
  }

  onEdit = () => {
    this.setState(prevState => ({renderResponse: !prevState.renderResponse}))
  }

  render() {
    const {textContent, renderResponse} = this.state

    return (
      <div className="main-container">
        <div className="content-container">
          <h1>Editable Text Input</h1>
          {renderResponse && (
            <div className="input-container">
              <input
                type="text"
                className="input-field-styling"
                value={textContent}
                onChange={this.onChangeText}
              />
              <button
                type="button"
                className="button-styling"
                onClick={this.onSave}
              >
                Save
              </button>
            </div>
          )}
          {!renderResponse && (
            <div className="input-container">
              <p className="printable-styling">{textContent}</p>
              <button
                type="button"
                className="edit-styling"
                onClick={this.onEdit}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EditableText
