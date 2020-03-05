import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import Form from './Form'
import Table from './Table'
import Typography from '@material-ui/core/Typography';
import ls from 'local-storage';

class App extends Component {

  getStateFromStorage() {
    const data = ls.get("simple-to-do-data");
    if (!data) return [];
    return data;
  }

  setStateToStorage() {
    ls("simple-to-do-data", this.state.tasks);
  }

  state = {
    tasks: this.getStateFromStorage(),
  }

  onSubmit = data => {
    data.value = data.value[0].toUpperCase() + data.value.substring(1);
    const newTask = {
      text: data.value,
      status: false
    }
    this.setState({
      tasks: [newTask, ...this.state.tasks]
    })
  }

  removeTask = index => {
    const newTasks = this.state.tasks.filter((task, i) => i !== index);
    this.setState({ tasks: newTasks })
  }
  changeStatus = index => {
    console.log(ls.get("data"))
    const newTasks = [...this.state.tasks]
    newTasks[index].status = !newTasks[index].status;
    this.setState({
      tasks: [...this.state.tasks.filter(task => !task.status), ...this.state.tasks.filter(task => task.status)]
    })
  }
  render() {
    const tasks = this.state.tasks;
    this.setStateToStorage()
    return (
      <React.Fragment >
        <Typography className="title" variant="button" display="block" gutterBottom>
          simple to do list
        </Typography>
        <Card className="card">

          <Form onSubmit={this.onSubmit} />
          <Table tasks={tasks} changeStatus={this.changeStatus} removeTask={this.removeTask} />

        </Card>
        <Typography className="credits" variant="caption" display="block" gutterBottom>
          This list will be stored in you browser storage.
        </Typography>
      </React.Fragment >
    )
  }
}


export default App 