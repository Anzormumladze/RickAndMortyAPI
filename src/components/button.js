import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { sortByName, sortByTime } from "../redux/episodes/episodesActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function BasicButtonGroup({ setSort, getData, setSortByTime }) {
  const classes = useStyles();
  const handleSort = () => {
    if (getData) {
      const sortArray = getData["results"];
      const sorted = sortArray.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      setSort(sorted);
    }
  };
  const handleSortByTime = () => {
    if (getData) {
      const sortArray = getData["results"];
      const sorted = sortArray.sort(function (a, b) {
        return new Date(b.created) - new Date(a.created);
      });
      setSortByTime(sorted);
    }
  };
  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={handleSort}>Sort by name</Button>
        <Button onClick={handleSortByTime}>Sort by time</Button>
      </ButtonGroup>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    getData: state.episodes.fetchData,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    setSort: (text) => dispatch(sortByName(text)),
    setSortByTime: (time) => dispatch(sortByTime(time)),
  };
};

BasicButtonGroup.propTypes = {
  getData: PropTypes.object,
  setSort: PropTypes.func,
  setSortByTime: PropTypes.func,
};

export default connect(mapStateToProps, dispatchStateToProps)(BasicButtonGroup);
