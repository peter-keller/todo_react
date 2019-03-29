import React, { Component } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import NavigationBar from "./components/navigation/NavigationBar";
import Tasks from "./components/tasks/tasks";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    user_id: null
  };

  getUser = () => {
    axios
      .post(
        "http://localhost:3000/api/v1/user",
        { name: this.state.user_name },
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .then(res => {
        this.setState({ user: res.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleFormChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  disableSubmit = e => {
    if (e.which === 13 /* Enter */) {
      e.preventDefault();
    }
  };

  render() {
    let userPrompt;
    if (!this.state.user) {
      let loginModal = (
        <div>
          <Form>
            <FormGroup>
              <Label for="getName">Name</Label>
              <Input
                onKeyDown={this.disableSubmit}
                onChange={this.handleFormChange}
                name="user_name"
                id="getName"
                placeholder="What is your name?"
              />
            </FormGroup>
            <FormGroup>
              <Button onClick={this.getUser}>Submit</Button>
            </FormGroup>
          </Form>
        </div>
      );
      userPrompt = loginModal;
    }

    if (this.state.user) {
      userPrompt = <Tasks user={this.state.user.id} />;
    }

    return (
      <div className="App">
        <NavigationBar />
        <div className="container" style={{ maxWidth: "400px" }}>
          {userPrompt}
        </div>
      </div>
    );
  }
}

export default App;
