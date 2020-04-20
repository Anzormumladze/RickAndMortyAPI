import React, { useEffect } from "react";
import { fetchData } from "../api/index";
import { connect } from "react-redux";
import { setCurrentData } from "../redux/episodes/episodesActions";
import EpisodesList from "../components/episodes/episodesList";

const Episodes = ({ setData, getData }) => {
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

const mapStateToProps = (state) => {
  return {
    getData: state.episodes.fetchData,
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(Episodes);
