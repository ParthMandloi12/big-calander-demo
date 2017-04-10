import React, { Component } from 'react';
import logo from './logo.svg';
import moment from 'moment';
import Calendar from 'deskbookers-calendar';
import './App.css';
import 'deskbookers-calendar/lib/css/react-big-calendar.css'

Calendar.momentLocalizer(moment);

const eventsResources = [
  {
    'title': 'Meeting',
    'resourceId': 'a',
    'start': new Date(2015, 3, 1, 5, 30, 0, 0),
    'end': new Date(2015, 3, 1, 10, 30, 0, 0),
  },
  {
    'title': 'Another Meeting',
    'resourceId': 'b',
    'start': new Date(2015, 3, 1, 2, 30, 0, 0),
    'end': new Date(2015, 3, 1, 4, 30, 0, 0),
  }
];

const resources = [{
  id: 'a',
  title: 'Room A'
}, {
  id: 'b',
  title: 'Room B'
}, {
  id: 'c',
  title: 'Room C'
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Calendar
          popup
          events={eventsResources}
          resources={resources}
          defaultDate={new Date(2015, 3, 1)}
        />
      </div>
    );
  }
}

export default App;
