import React, { Component } from 'react'
// import Joi from 'joi-browser'
class Input extends Component {
  state = {
    data: {},
    errors: {},
  }
//   schema = {
//     userId: Joi.string(),
//     sName: Joi.string().required().label('Name'),
//     sCity: Joi.string().required().label('City'),
//     sAmount: Joi.string().required().label('Amount'),
//   }

//   validate = () => {
//     const options = { abortEarly: false }
//     const { error } = Joi.validate(this.state.data, this.schema, options)
//     if (!error) return null
//     const errors = {}
//     for (let item of error.details) errors[item.path[0]] = item.message
//     return errors
//   }

//   validateProperty = ({ name, value }) => {
//     const obj = { [name]: value }
//     const schema = { [name]: schema[name] }

//     alert('I am here')
//     const { error } = Joi.validate(obj, schema)
//     return error ? error.details[0].message : null
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()
//     const errors = this.validate()
//     this.setState({ errors: errors || {} })
//     if (errors) return
//     this.doSubmit()
//   }

//   handleChange = ({ currentTarget: input }) => {
//     const errors = { ...this.state.errors }
//     const errorMessage = this.validateProperty(input)
//     if (errorMessage) errors[input.name] = errorMessage
//     else delete errors[input.name]
//     const data = { ...this.state.data }
//     data[input.name] = input.value
//     this.setState({ data, errors })
//   }

  render() {
    const {
      name,
      label,
      action,
      error,
      value = '',
    } = this.props
    return (
        <div class="input-group input-group-lg" style={{ paddingBottom: '20px' }}>
            <span class="input-group-text" id="inputGroup-sizing-lg">{label}</span>
            <input
              name={name}
              value={value}
              className="form-control"
              type="text"
              //validate
              onChange={(e) => action(e.target.value)}
            />
          {error && <div className="alert alert-danger">{error}</div>}
     </div>
    )
  }
}

export default Input
