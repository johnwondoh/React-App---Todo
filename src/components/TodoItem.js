import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    // markComplete = (e) => {
    //     console.log(this.props)
    // }
  render() {
    //   use dis-structuring to make it easier
    const {title, id} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
            <input type='checkbox' onClick={this.props.markComplete.bind(this, id)}/> 
            {' '}
            {title }
        </p>
      </div>
    )
  }
}

// Defining PropType

TodoItem.propType = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
