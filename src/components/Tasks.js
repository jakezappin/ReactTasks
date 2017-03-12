import React, { Component } from 'react';
import {Panel} from 'muicss/react'
import TaskItem from './TaskItem'

class Tasks extends Component {

  handleEditState(tasks, checked){
    this.props.onEditState(tasks, checked);
  }

  render() {

    let taskItems;
    if(this.props.tasks){
      taskItems = this.props.tasks.map((task) => {
        return (
          <TaskItem onEditState={this.handleEditState.bind(this)} key={task._id.$oid} task={task} />
        );
      });
    } else {
      taskItems = "NO TASKS";
    }

    return (
      <Panel>
        {taskItems}
      </Panel>
    );
  }
}

export default Tasks;
