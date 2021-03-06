import React from "react";
import { connect } from "react-redux";
import {setFavorite,removeFavorite,setPage,detailPage} from "../../redux/episodes/episodesActions";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AppBar from "./appBar";
import PropTypes, { object } from "prop-types";
import Buttons from "./button";
import Pagination from "./pagination";

const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
  },
  card: {
    marginBottom: "40px",
    width: "350px",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  },
});

const EpisodesList = ({getData, getFavorites,setFavor,deleteFavor,setPage,history,setDetailPageData}) => {
  const isInFavorite = (id) => getFavorites.find((myId) => myId === id);
  const clickHandler = (item) => {
    if (isInFavorite(item.id)) {
      deleteFavor(item.id);
    } else {
      setFavor(item.id);
    }
  };
  const paginationEventHandel = (event, value) => {
    setPage(value);
  };

  const moreDetailsHanlder = (data) => {
    setDetailPageData(data.url);
    history.push("/episode/details");
  };
  const classes = useStyles();
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <AppBar />
      </div>
      <Buttons history={history} />
      <div className={classes.cardContainer}>
        {getData.results
          ? getData.results.map((data) => {
              return (
                <Card className={classes.card} key={data.id}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      noWrap
                    >
                      ID:{data.id}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                      EPISODE NAME: {data.name}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      noWrap
                    >
                      {data.air_date}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      noWrap
                    >
                      {data.episode}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => moreDetailsHanlder(data)}
                      size="medium"
                    >
                      show more
                    </Button>
                    <Button
                      onClick={() => clickHandler(data)}
                      startIcon={
                        isInFavorite(data.id) ? (
                          <FavoriteIcon />
                        ) : (
                          <FavoriteBorderIcon />
                        )
                      }
                      size="medium"
                    >
                      {isInFavorite(data.id) ? "remove" : "add"}
                    </Button>
                  </CardActions>
                </Card>
              );
            })
          : null}
      </div>
      <div className={classes.paginationContainer}>
        <Pagination
          count={getData.info ? getData.info.pages : 1}
          onChangeHandler={paginationEventHandel}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getData: state.episodes.fetchData,
    getFavorites: state.episodes.favoritesId,
    getSortedData: state.episodes.sortedData,
    getNumberSortedData: state.episodes.sortedByTimeData,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    setFavor: (id) => dispatch(setFavorite(id)),
    deleteFavor: (id) => dispatch(removeFavorite(id)),
    setPage: (page) => dispatch(setPage(page)),
    setDetailPageData: (url) => dispatch(detailPage(url)),
  };
};

EpisodesList.propTypes = {
  getData: PropTypes.object,
  getFavorites: PropTypes.arrayOf(object),
  setFavor: PropTypes.func,
  deleteFavor: PropTypes.func,
  setPage: PropTypes.func,
  getNumberSortedData: PropTypes.func,
  history: PropTypes.object,
  setDetailPageData: PropTypes.func,
};

export default connect(mapStateToProps, dispatchStateToProps)(EpisodesList);
