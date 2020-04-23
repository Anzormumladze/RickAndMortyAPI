import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import PropTypes from "prop-types";

const Paginations = ({ count, onChangeHandler }) => {
  return <Pagination count={count} onChange={onChangeHandler} />;
};

Paginations.propTypes = {
  count: PropTypes.number,
  onChangeHandler: PropTypes.func,
};

export default Paginations;
