import React, { useEffect } from "react";
import { fetchCharacterData } from "../../api/index";
import { connect } from "react-redux";
import { setCurrentData } from "../../redux/heroes/heroesAction";
import HeroesList from "../../components/heroes/heroesList";

const Heroes = ({ setData }) => {
  useEffect(() => {
    const fetchAPI = async () => {
      const initialData = await fetchCharacterData();
      setData(initialData);
    };
    fetchAPI();
  }, [setData]);
  return <HeroesList />;
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
export default connect(mapStateToProps, dispatchStateToProps)(Heroes);
