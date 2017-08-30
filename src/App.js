import React, { Component } from 'react';
import {Button,DatePicker, message} from 'antd'
import './App.css';

class App extends Component {

  onChange = (date, dateString) => {
    //alert(dateString)
    message.info(dateString);
  }

  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <DatePicker onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
