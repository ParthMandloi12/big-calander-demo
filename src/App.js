import React, { Component } from "react";
import moment from "moment";
import Calendar from "deskbookers-calendar";
import "./App.css";
import "deskbookers-calendar/lib/css/react-big-calendar.css";
// import 'react-big-calendar/lib/css/react-big-calendar.css'
import MyToolBar from "./MyToolBar";
// import CalendarToolBar from "./ClaendarToolbar"
Calendar.momentLocalizer(moment);
// BigCalendar.momentLocalizer(moment);

// const localizer = momentLocalizer(moment)
let allViews = Object.keys(Calendar.views).map((k) => Calendar.views[k]);

const eventsResources = [
  {
    title: "Book",
    resourceId: "1",
    start: new Date(2015, 3, 1, 5, 30, 0, 0),
    end: new Date(2015, 3, 1, 10, 30, 0, 0),
  },
  {
    title: "Block",
    resourceId: "2",
    start: new Date(2015, 3, 1, 2, 30, 0, 0),
    end: new Date(2015, 3, 1, 4, 30, 0, 0),
  },
  {
    title: "Cancelled",
    resourceId: "2",
    start: new Date(2015, 3, 1, 4, 30, 0, 0),
    end: new Date(2015, 3, 1, 6, 30, 0, 0),
  },
  {
    title: "Pending",
    resourceId: "3",
    start: new Date(2015, 3, 1, 3, 30, 0, 0),
    end: new Date(2015, 3, 1, 6, 30, 0, 0),
  },
];

const resources = [
  {
    id: "1",
    title: "Turf 1",
  },
  {
    id: "2",
    title: "Turf 2",
  },
  {
    id: "3",
    title: "Turf 3",
  },
];
function Event({ event }) {
  return (
    <span>
      <strong>{event.title}</strong>
      {event.desc && ":  " + event.desc}
    </span>
  );
}

function EventAgenda({ event }) {
  return (
    <span>
      <em style={{ color: "magenta" }}>{event.title}</em> <p>{event.desc}</p>
    </span>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(2015, 3, 1),
      events: [
        {
          title: "Book",
          resourceId: "1",
          start: new Date(2015, 3, 1, 5, 0, 0, 0),
          end: new Date(2015, 3, 1, 10, 0, 0, 0),
        },
        {
          title: "Block",
          resourceId: "2",
          start: new Date(2015, 3, 1, 2, 0, 0, 0),
          end: new Date(2015, 3, 1, 4, 0, 0, 0),
        },
        {
          title: "Cancelled",
          resourceId: "2",
          start: new Date(2015, 3, 1, 4, 0, 0, 0),
          end: new Date(2015, 3, 1, 6, 0, 0, 0),
        },
        {
          title: "Pending",
          resourceId: "3",
          start: new Date(2015, 3, 1, 3, 0, 0, 0),
          end: new Date(2015, 3, 1, 6, 0, 0, 0),
        },
      ],
    };
  }
  onSlotChange(slotInfo) {
    let prevState = [...this.state.events];
    let newObj = {
      title: "Book",
      resourceId: slotInfo.resourceId,
      start: slotInfo.start,
      // end: slotInfo.end,
      end: moment(slotInfo.end).add(30, "m").toDate(), //add 30mins extra
    };
    prevState.push(newObj);
    this.setState({
      events: prevState,
    });
  }
  onEventClick(event) {
    console.log(event, "event"); //Shows the event details provided while booking
  }

  timesheetDate = () => {
    console.log("hooopppeee");
    let change = new Date(2020, 10, 1);
    this.setState({
      date: change,
    });
  };
  handleBack = () => {
    let prev = new Date(2015, 3, 1);
    this.setState({
      date: prev,
    });
  };
  eventStyleGetter(event, start, end, isSelected) {
    var backgroundColor = "#" + event.hexColor;
    var style = {
      backgroundColor: backgroundColor,
      borderRadius: "4px",
      opacity: 0.8,
      color: "black",
      border: "0px",
      display: "block",
    };
    if (event.title === "Cancelled") {
      style.backgroundColor = "lightgreen";
    }
    if (event.title === "Block") {
      style.backgroundColor = "gray";
    }
    if (event.title === "Pending") {
      (style.border = "1px solid blue"),
        (style.backgroundColor = "white"),
        (style.color = "blue");
    }
    return {
      style: style,
    };
  }

  render() {
    console.log(this.state.date, "date");
    let shortDate = moment(this.state.date).format("MMM Do YY");
    return (
      <div className="App">
        <span>{shortDate}</span>
        <Calendar
          popup
          // localizer={localizer}
          events={this.state.events}
          resources={resources}
          view="resource"
          // defaultDate={new Date(2015, 3, 1)}
          defaultDate={this.state.date}
          date={this.state.date}
          selectable
          step={60}
          timeslots={1}
          onSelectEvent={(event) => this.onEventClick(event)}
          onSelectSlot={(slotInfo) => this.onSlotChange(slotInfo)}
          eventPropGetter={this.eventStyleGetter}
          components={{
            event: Event,
            // toolbar:MyToolBar,
            // toolbar:CalendarToolBar,
            toolbar: (props) => (
              <MyToolBar
                {...props}
                timesheetDate={this.timesheetDate}
                prevDate={this.handleBack}
              />
            ),
            agenda: {
              event: EventAgenda,
            },
          }}
          // toolbar={CalendarToolbar}
        />
      </div>
    );
  }
}

export default App;
