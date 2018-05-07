import React,{Component} from 'react'
import {connect} from 'react-redux'
import { addTodo } from "../actions"
import propTypes from 'prop-types'

class AddTodo extends Component {
  constructor(props,context) {
    super(props,context)
    // this.input = ''
    this.onSubmit = this.onSubmit.bind(this)
    this.refInput = this.refInput.bind(this)
  }

  onSubmit(ev) {
    ev.preventDefault()
    const input = this.input
    if(!input.value.trim()) {
      return
    }
    this.props.onAdd(input.value)
    input.value = ''
  }

  refInput(node) {
    this.input = node
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input type="text" className="new-todo" ref={this.refInput} />
          <button className="add-btn" type="submit">添加</button>
        </form>
      </div>
    )
  } 
}

AddTodo.propTypes = {
  onAdd: propTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)