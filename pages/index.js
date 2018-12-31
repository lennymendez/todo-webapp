import React, { Component } from "react";
import Layout from "../components/layout";
import DefaultInput from "../components/input-field"
import "./style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      todoList: [],
      newList: <li />
    };
  }

  handleChange = event => {
    this.setState({
      inputVal: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.handleList(this.state.inputVal);
    this.setState({
      inputVal: ""
    });
    // AQUI VA LA COSA
    console.log(this.state.inputVal);
  };

  handleList = newVal => {
    const joined = this.state.todoList.concat(newVal);
    this.setState({
      todoList: this.state.todoList.concat(newVal),
      newList: joined.map(list => (
        <li key={list.toString()}>
          <input type="checkbox" />
          {list}
        </li>
      ))
    });
  };

  render() {
    const { inputVal, newList } = this.state;
    return (
      <Layout>
        <div>
          <h1>Pro To Do</h1>
          <DefaultInput value={inputVal} onChange={this.handleChange} onSubmit={this.handleSubmit} />
          <div>{newList}</div>
        </div>
      </Layout>
    );
  }
}

export default Home;
