import React, { Component } from "react";
import axios from "axios";

import SingleTask from "./SingleTask";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      is_empty: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.fetchTasks = this.fetchTasks.bind(this);
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    if (this.props.user) {
      axios
        .post(`http://localhost:3000/api/v1/matches`, {
          id: this.props.user
        })
        .then(response => {
          this.setState({ item: response.data });
        })
        .catch(err => {
          this.setState({ item: null, is_empty: true });
          console.log(err);
        });
    }
  };

  handleDelete = todo_id => {
    axios
      .delete(
        `http://localhost:3000/api/v1/destroy_selected/user_id=${
          this.props.user
        }&todo_id=${todo_id}`
      )
      .then(res => {
        this.fetchTasks();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.item) {
      return this.state.item.data.map((item, i) => {
        return (
          <SingleTask
            key={item.id}
            id={item.id}
            task={item.task}
            priority={item.priority}
            toDelete={() => this.handleDelete(item.id)}
            onUpdate={() => this.fetchTasks}
          />
        );
      });
    } else if (!this.state.empty) {
      return (
        <div>
          <h1>No todo left</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Fetching... LEAVE ME ALONE</h1>
        </div>
      );
    }
  }
}

export default Tasks;
