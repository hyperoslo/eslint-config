import React from 'react';

class Configuration extends React.Component {

  constructor() {
    this.state = { enabled: true };
  }

  render() {
    return (
      <config>
        { this.state.enabled }
      </config>
    );
  }

}

export default Configuration;
