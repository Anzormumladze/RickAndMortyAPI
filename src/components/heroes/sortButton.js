import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { sortByName, sortByStatus } from "../../redux/heroes/heroesAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NavigationButtons from "./navigationButton";

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

function SortButton({ getData, setSort, setSortByStatus, history }) {
  const classes = useStyles();
  const handleNameSort = () => {
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
  const handleSortByStatus = () => {
    if (getData) {
      const sortArray = getData["results"];
      const sorted = sortArray.sort((a, b) => {
        return a.status === b.status ? 0 : a.status < b.status ? -1 : 1;
      });
      setSortByStatus(sorted);
    }
  };
  return (
    <div>
      <NavigationButtons history={history} />
      <div className={classes.root}>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={handleNameSort}>Sort by Name</Button>
          <Button onClick={handleSortByStatus}>Sort by Status</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    getData: state.heroes.fetchData,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    setSort: (text) => dispatch(sortByName(text)),
    setSortByStatus: (text) => dispatch(sortByStatus(text)),
  };
};

SortButton.propTypes = {
  getData: PropTypes.object,
  setSort: PropTypes.func,
  setSortByStatus: PropTypes.func,
};

export default connect(mapStateToProps, dispatchStateToProps)(SortButton);
