import { Component } from 'react';
import Increment from './components/Increment';
import Toggler from './components/Toggler';
import RemoveItemFromList from './components/RemoveItemFromList';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <>
        <Increment />
        <Toggler />
        <RemoveItemFromList />
      </>
    )
  }
}