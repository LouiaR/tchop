import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import TchopBuilder from './containers/TchopBuilder/TchopBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <TchopBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
