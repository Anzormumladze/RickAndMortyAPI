import React from "react";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";

const NavigationButtons = ({ history }) => {
  return (
    <div>
      <Fab
        variant="extended"
        onClick={() => history.push("/episode/favorites")}
      >
        <NavigationIcon />
        Navigate to Favorites Page
      </Fab>
      <Fab variant="extended" onClick={() => history.push("/heroes")}>
        <NavigationIcon />
        Navigate to Heroes Page
      </Fab>
    </div>
  );
};

export default NavigationButtons;
