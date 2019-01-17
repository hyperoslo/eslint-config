/* eslint-disable import/no-extraneous-dependencies */

import PropTypes from 'prop-types';
import React from 'react';

class Configuration extends React.Component {
  static propTypes = {
    flag: PropTypes.number.isRequired,
  };

  constructor(props) {
    super();

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
