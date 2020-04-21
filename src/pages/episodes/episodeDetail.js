import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  setFavorite,
  removeFavorite,
  herolist,
  getHeroData,
} from "../../redux/episodes/episodesActions";
import FbComment from "../../components/fbcomment";

const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "200px",
  },
  card: {
    width: "350px",
  },
});

const EpisodeDetail = ({
  getDetailData,
  getFavorites,
  setFavor,
  deleteFavor,
  setHeroList,
  getHeroData,
  history,
}) => {
  getHeroData.map((element) => {
    console.log(element.name);
  });
  const isInFavorite = (id) => getFavorites.find((myId) => myId === id);
  const clickHandler = (item) => {
    if (isInFavorite(item.id)) {
      deleteFavor(item.id);
    } else {
      setFavor(item.id);
    }
  };

  const heroShowHandler = (data) => {
    let numberPattern = /\d+/g;

    const newarr = data.characters.map((element) => {
      return element.match(numberPattern);
    });

    const characterlist = [...newarr].join(",");
    setHeroList(characterlist);
  };

  const heroPageHandler = (data) => {
    history.push("/heroes");
  };

  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card} key={getDetailData.id}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" noWrap>
            ID:{getDetailData.id}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            EPISODE NAME: {getDetailData.name}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" noWrap>
            {getDetailData.air_date}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" noWrap>
            {getDetailData.episode}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => clickHandler(getDetailData)}
            startIcon={
              isInFavorite(getDetailData.id) ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderIcon />
              )
            }
            size="medium"
          >
            {isInFavorite(getDetailData.id) ? "remove" : "add"}
          </Button>
        </CardActions>
      </Card>
      <div>
        <Button onClick={() => heroShowHandler(getDetailData)}>
          SHOW HEROES LIST
        </Button>
      </div>
      <div>
        {getHeroData.map((data) => {
          return (
            <CardContent>
              <Typography
                onClick={() => heroPageHandler(data)}
                className={classes.title}
                color="textSecondary"
                noWrap
              >
                {data.name}
              </Typography>
            </CardContent>
          );
        })}
      </div>
      <div>
        <FbComment />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getDetailData: state.episodes.detailData,
    getFavorites: state.episodes.favoritesId,
    getHeroData: state.episodes.heroData,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    setFavor: (id) => dispatch(setFavorite(id)),
    deleteFavor: (id) => dispatch(removeFavorite(id)),
    setHeroList: (list) => dispatch(herolist(list)),
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(EpisodeDetail);
