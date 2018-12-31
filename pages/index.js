import React, { Component } from "react";
import Layout from "../components/layout";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {} = this.state;
    return (
      <Layout>
        <div>
          <h1>NextJS Boilerplate for Static Pages</h1>
        </div>
      </Layout>
    );
  }
}

export default Home;
