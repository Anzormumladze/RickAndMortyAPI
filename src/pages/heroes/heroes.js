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
  }, []);
  return <HeroesList />;
};
const dispatchStateToProps = (dispatch) => {
  return {
    setData: (data) => dispatch(setCurrentData(data)),
  };
};

export default connect(null, dispatchStateToProps)(Heroes);
