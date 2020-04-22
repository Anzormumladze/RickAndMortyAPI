import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { searchGender } from "../../redux/heroes/heroesAction";
import { connect } from "react-redux";

function RadioButtonsGroup({ setGender }) {
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" onChange={handleChange}>
        <FormControlLabel value="Female" control={<Radio />} label="Female" />
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

const dispatchStateToProps = (dispatch) => {
  return {
    setGender: (text) => dispatch(searchGender(text)),
  };
};

export default connect(null, dispatchStateToProps)(RadioButtonsGroup);
