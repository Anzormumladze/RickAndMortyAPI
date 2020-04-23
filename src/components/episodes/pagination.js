import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const Paginations = ({ count, onChangeHandler }) => {
  return <Pagination count={count} onChange={onChangeHandler} />;
};

export default Paginations;
