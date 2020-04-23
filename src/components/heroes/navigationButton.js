import React from "react";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import PropTypes from "prop-types";

const NavigationButtons = ({ history }) => {
  return (
    <div>
      <Fab variant="extended" onClick={() => history.push("/heroes/favorites")}>
        <NavigationIcon />
        Navigate to Favorites Page
      </Fab>
      <Fab variant="extended" onClick={() => history.push("/")}>
        <NavigationIcon />
        Navigate to Episode Page
      </Fab>
    </div>
  );
};

NavigationButtons.propTypes = {
  history: PropTypes.object,
};

export default NavigationButtons;
