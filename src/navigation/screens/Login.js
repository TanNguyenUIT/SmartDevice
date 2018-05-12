import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import doOnMount from '../../util/doOnMount';
import { changeRoot } from '../navActions';

const Login = () => (
  <View style={{ flex: 1 }}>
    <TouchableOpacity>
      <Text>this is login</Text>
    </TouchableOpacity>
  </View>
);

const HOCLogin = compose(
  connect(
    state => ({
      nav: state.nav,
    }),
    { changeRoot },
  ),
  doOnMount(({ changeRoot }) => {
    setTimeout(() => changeRoot('main'), 2000);
  }),
)(Login);

export default HOCLogin;
