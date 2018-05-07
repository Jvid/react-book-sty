import React from 'react'
import { connect } from 'react-redux'
//import {bindActionCreators} from 'redux'
import TodoItem from './todoItem.js'

import { FilterTypes } from '../../constants.js'
import propTypes from 'prop-types'

const TodoList = ({todos,onToggleTodo,onRemoveTodo}) => {
  return (
    <ul className="todo-list">
      {
        todos.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
           /> 
        ))
      }
    </ul>
  )
}

TodoList.propTypes = {
  todos: propTypes.array.isRequired
}

const selectVisibleTodos = (todos,filter) => {
  switch (filter) {
    case FilterTypes.ALL:
      return todos
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed)
    case FilterTypes.UNCOMPLETED: 
      return todos.filter(item => !item.completed)
    default:
      throw new Error('unsupport filter')
  }
}

const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state.todos, state.filter)
  }
}

/*
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onToggleTodo: toggleTodo,
  onRemoveTodo: removeTodo
}, dispatch);
*/

export default connect(mapStateToProps)(TodoList);