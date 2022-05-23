import React, { Component } from 'react'
class Input extends Component {

  render() {
    const {
      name,
      label,
      handleInputChange,
      error,
      value = '',
    } = this.props
    return (
        <div className="input-group input-group-lg" style={{ paddingBottom: '20px' }}>
            <span className="input-group-text" id="inputGroup-sizing-lg">{label}</span>
            <input
              name={name}
              value={value}
              className="form-control"
              type="text"
              onChange={(e) => handleInputChange(e.target.value)}
            />
          {error && <div className="alert alert-danger">{error}</div>}
     </div>
    )
  }
}

export default Input
