import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {
  searchGender,
  searchStatus,
  searchSpecies,
} from "../../redux/heroes/heroesAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function RadioButtonsGroup({ setGender, setStatus, setSpecies }) {
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            onChange={handleChange}
          >
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="unknown"
              control={<Radio />}
              label="unknown"
            />
          </RadioGroup>
        </div>
        <div>
          <FormLabel component="legend">Status</FormLabel>
          <RadioGroup
            aria-label="status"
            name="status"
            onChange={handleStatusChange}
          >
            <FormControlLabel value="alive" control={<Radio />} label="alive" />
            <FormControlLabel value="dead" control={<Radio />} label="dead" />
          </RadioGroup>
        </div>
        <div>
          <FormLabel component="legend">Species</FormLabel>
          <RadioGroup
            aria-label="Species"
            name="Species"
            onChange={handleSpeciesChange}
          >
            <FormControlLabel value="Human" control={<Radio />} label="Human" />
            <FormControlLabel value="Alien" control={<Radio />} label="Alien" />
            <FormControlLabel
              value="Humanoid"
              control={<Radio />}
              label="Humanoid"
            />
            <FormControlLabel
              value="Vampire"
              control={<Radio />}
              label="Vampire"
            />
            <FormControlLabel value="Robot" control={<Radio />} label="Robot" />
            <FormControlLabel
              value="Disease"
              control={<Radio />}
              label="Disease"
            />
          </RadioGroup>
        </div>
      </div>
    </FormControl>
  );
}

const dispatchStateToProps = (dispatch) => {
  return {
    setGender: (text) => dispatch(searchGender(text)),
    setStatus: (text) => dispatch(searchStatus(text)),
    setSpecies: (text) => dispatch(searchSpecies(text)),
  };
};

RadioButtonsGroup.propTypes = {
  setGender: PropTypes.func,
  setStatus: PropTypes.func,
  setSpecies: PropTypes.func,
};

export default connect(null, dispatchStateToProps)(RadioButtonsGroup);
