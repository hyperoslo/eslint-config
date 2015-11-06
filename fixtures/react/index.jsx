import React from 'react';

class Configuration extends React.Component {

  constructor(props) {
    this.state = { enabled: true };

    switch (props.flag) {
      case 0:
        this.state.enabled = false;
        break;
      default:
    }
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
