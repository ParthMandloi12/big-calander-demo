import React from "react";
import Toolbar from "react-big-calendar/lib/Toolbar";
export default class MyToolBar extends Toolbar {
  componentDidMount() {
    const view = this.props.view;
    console.log(view);
  }
  render() {
    return (
      <div>
        <div className="rbc-btn-group">
          <button type="button" onClick={() => this.navigate(new Date(2020, 11, 1))}>
            sahil
          </button>
          <button type="button" onClick={() => this.props.prevDate()}>
            back
          </button>
          <button type="button" onClick={() => this.navigate("NEXT")}>
            next
          </button>
          <button type="button" onClick={()=>this.props.timesheetDate()}>
            ne
          </button>
        </div>
      </div>
    );
  }
}
