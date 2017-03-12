import React, { Component } from 'react';
import {Form, Input} from 'muicss/react'

class TaskItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      task: ''
    }
  }

  onChange(event){
    this.setState({task: event.target.value});

  }

  onSubmit(event){
    event.preventDefault();
    this.props.onAddTask(this.state.task);
  }

  render() {
    return (
      <div className="mui--divider-bottom">
        <Form onSubmit={this.onSubmit.bind(this)}>
          <Input hint="Add Task" onChange={this.onChange.bind(this)} />
        </Form>
      </div>
    );
  }
}

export default TaskItem;
