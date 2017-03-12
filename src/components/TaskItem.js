import React, { Component } from 'react';
import {Checkbox} from 'muicss/react'

class TaskItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      task: props.task
    }
  }

  onChange(task, event){
    this.props.onEditState(task, event.target.checked);
  }

  render() {
    return (
      <div className="mui--divider-bottom">
        <Checkbox className={(this.state.task.completed) ? "completed" : ""} onChange={this.onChange.bind(this, this.state.task)} name={this.state.task._id.$oid} label={this.state.task.text} defaultChecked={this.state.task.completed}/>
      </div>
    );
  }
}

export default TaskItem;
