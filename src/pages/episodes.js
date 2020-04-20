import React, { useEffect } from "react";
import { fetchData } from "../api/index";
import { connect } from "react-redux";
import { setCurrentData } from "../redux/episodes/episodesActions";
import EpisodesList from "../components/episodes/episodesList";
import PropTypes from "prop-types";

const Episodes = ({ setData }) => {
  useEffect(() => {
    const fetchAPI = async () => {
      const initialData = await fetchData();
      setData(initialData);
    };
    fetchAPI();
  }, [setData]);
  return (
    <div>
      <EpisodesList />
    </div>
  );
};
const dispatchStateToProps = (dispatch) => {
  return {
    setData: (data) => dispatch(setCurrentData(data)),
  };
};

Episodes.propTypes = {
  setData: PropTypes.func,
};

export default connect(null, dispatchStateToProps)(Episodes);
