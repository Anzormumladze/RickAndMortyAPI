import React from 'react'
import { connect } from "react-redux";

const EpisodesList = ({getData}) =>{
    console.log(getData)
    return(
        <div>
            {getData.info?getData.info.count:null}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        getData: state.episodes.fetchData
    };
  };
  

export default connect(mapStateToProps)(EpisodesList);