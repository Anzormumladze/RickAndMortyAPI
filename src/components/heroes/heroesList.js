import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  setFavorite,
  removeFavorite,
  setPage,
  detailPage,
} from "../../redux/heroes/heroesAction";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Pagination from "@material-ui/lab/Pagination";
import Header from "./header";
import PropTypes, { object } from "prop-types";
import Checkbox from "./checkbox";
import SortButton from "./sortButton";

const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
  },
  root: {
    marginTop: "40px",
    marginBottom: "40px",
    width: "350px",
  },
  media: {
    height: 0,
    paddingTop: "90%",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  },
});

function HeroList({
  getData,
  getFavorites,
  setFavor,
  deleteFavor,
  setPage,
  history,
  setDetailPage,
}) {
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
    setDetailPage(data.url);
    history.push("/heroes/details");
  };
  const classes = useStyles();

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Header />
      </div>
      <div>
        <SortButton history={history} />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Checkbox />
        </div>
      </div>
      <div className={classes.cardContainer}>
        {getData.results
          ? getData.results.map((data) => {
              return (
                <Card className={classes.root} key={data.id}>
                  <CardHeader
                    title={data.name}
                    subheader={`ID:${data.id} STATUS:${data.status}`}
                  />
                  <CardMedia
                    className={classes.media}
                    image={data.image}
                    title="Paella dish"
                  />
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="span"
                      >
                        Species:{data.species}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="span"
                      >
                        Gender:{data.gender}
                      </Typography>
                    </div>
                  </CardContent>
                  <CardActions disableSpacing>
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
                    <Button
                      onClick={() => moreDetailsHanlder(data)}
                      size="medium"
                    >
                      show more
                    </Button>
                  </CardActions>
                </Card>
              );
            })
          : null}
        <div className={classes.paginationContainer}>
          <Pagination
            count={getData.info ? getData.info.pages : 1}
            onChange={paginationEventHandel}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    getData: state.heroes.fetchData,
    getFavorites: state.heroes.favoritesId,
    getSortedDataBySpecies: state.heroes.sortedDataSpecies,
    getSortedData: state.heroes.sortedData,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    setFavor: (id) => dispatch(setFavorite(id)),
    deleteFavor: (id) => dispatch(removeFavorite(id)),
    setPage: (page) => dispatch(setPage(page)),
    setDetailPage: (url) => dispatch(detailPage(url)),
  };
};

HeroList.propTypes = {
  getData: PropTypes.array,
  getFavorites: PropTypes.arrayOf(object),
  setFavor: PropTypes.func,
  deleteFavor: PropTypes.func,
  setPage: PropTypes.func,
  history: PropTypes.object,
  setDetailPage: PropTypes.func,
};

export default connect(mapStateToProps, dispatchStateToProps)(HeroList);
