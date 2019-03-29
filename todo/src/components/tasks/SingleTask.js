import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  FormGroup,
  Form,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

import "./Task.css";

class SingleTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendUpdatedFields = () => {
    this.toggle();
    axios
      .put(`http://localhost:3000/api/v1/todo/${this.props.id}`, {
        data: { task: this.state.task, priority: this.state.priority }
      })
      .then(res => {
        this.props.onUpdate();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className={`taskParent container ${this.props.priority}`}>
        <div className="task" key={this.props.id}>
          {this.props.task}
        </div>
        <div className="actions">
          <ul>
            <li>
              <Button outline color="success" onClick={this.toggle}>
                Edit
              </Button>
              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
              >
                <ModalHeader toggle={this.toggle}>Edit Task</ModalHeader>
                <ModalBody>
                  <Form>
                    <FormGroup>
                      <Label for="Task">Task</Label>
                      <Input
                        type="text"
                        name="task"
                        id="task"
                        value={this.props.task}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="priority">Priority</Label>
                      <Input
                        type="select"
                        name="priority"
                        id="priority"
                        onChange={this.handleChange}
                        value={this.props.priority}
                      >
                        <option>High</option>
                        <option>Normal</option>
                        <option>Low</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Button onClick={this.sendUpdatedFields}>Update</Button>
                    </FormGroup>
                  </Form>
                </ModalBody>
              </Modal>
            </li>
            <li>
              <Button outline color="danger" onClick={this.props.toDelete}>
                Delete
              </Button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SingleTask;
