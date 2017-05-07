import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import {
  CardSection,
} from './common';

class LibraryList extends Component {
  render() {
    console.log('hi');
    console.log(this.props.libraries);
    return (
      <CardSection>
        <Text>Hello World</Text>
      </CardSection>
    );
  }
}

function mapStateToProps(state) {
  return {
    libraries: state.libraries,
  };
}


export default connect(mapStateToProps)(LibraryList);
