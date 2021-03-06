import React, { useEffect } from "react";
import { fetchCharacterData } from "../../api/index";
import { connect } from "react-redux";
import { setCurrentData } from "../../redux/heroes/heroesAction";
import HeroesList from "../../components/heroes/heroesList";
import PropTypes from "prop-types";

const Heroes = ({ setData, history }) => {
  useEffect(() => {
    const fetchAPI = async () => {
      const initialData = await fetchCharacterData();
      setData(initialData);
    };
    fetchAPI();
  }, [setData]);
  return <HeroesList history={history} />;
};
const dispatchStateToProps = (dispatch) => {
  return {
    setData: (data) => dispatch(setCurrentData(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    getData: state.heroes.fetchData,
  };
};

Heroes.propTypes = {
  setData: PropTypes.func,
  history: PropTypes.object,
};

export default connect(mapStateToProps, dispatchStateToProps)(Heroes);
