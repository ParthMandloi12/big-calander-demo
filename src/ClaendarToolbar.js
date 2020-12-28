import React from "react";
import PropTypes from "prop-types";
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import RightArrowIcon from "@material-ui/icons/ChevronRight";
import LeftArrowIcon from "@material-ui/icons/ChevronLeft";
import messages from "./messages";

class CalendarToolBar extends React.PureComponent {
  handleChange = (event) => {
    this.props.onView(event.target.value);
  };

  render() {
    const { view, views, onNavigate, label } = this.props;
    return (
      <Toolbar>
        <Typography
          variant="headline"
          style={{ textTransform: "capitalize", width: "100%" }}
        >
          {label}
        </Typography>
        <div style={{ width: "100%", textAlign: "right" }}>
          <IconButton onClick={() => onNavigate("PREV")}>
            <LeftArrowIcon />
          </IconButton>
          <IconButton>
            <RightArrowIcon onClick={() => onNavigate("NEXT")} />
          </IconButton>
          <FormControl style={{ marginLeft: 16 }}>
            <Select value={view} onChange={this.handleChange}>
              {views.map((value) => (
                <MenuItem value={value}>
                  <FormattedMessage {...messages[value]} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Toolbar>
    );
  }
}

CalendarToolBar.propTypes = {
  onView: PropTypes.func,
  onNavigate: PropTypes.func,
  label: PropTypes.string,
  view: PropTypes.string,
  views: PropTypes.array,
};

export default CalendarToolBar;
