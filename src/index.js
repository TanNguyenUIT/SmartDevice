import { Component } from 'react';

import { navInitial, startApp } from './navigation/navIndex';
import store from './state/createStore';

export default class App extends Component {
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(navInitial);
  }

  onStoreUpdate() {
    const { root } = store.getState().nav;
    if (this.currentRoot !== root) {
      this.currentRoot = root;
      startApp(root);
    }
  }
}
