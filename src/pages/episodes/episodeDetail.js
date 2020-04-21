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
} from "../../redux/episodes/episodesActions";
import FbComment from "../../components/fbcomment";

const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    justifyContent: "center",
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
}) => {
  console.log(getDetailData.characters);

  const isInFavorite = (id) => getFavorites.find((myId) => myId === id);
  const clickHandler = (item) => {
    if (isInFavorite(item.id)) {
      deleteFavor(item.id);
    } else {
      setFavor(item.id);
    }
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
        <FbComment />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getDetailData: state.episodes.detailData,
    getFavorites: state.episodes.favoritesId,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    setFavor: (id) => dispatch(setFavorite(id)),
    deleteFavor: (id) => dispatch(removeFavorite(id)),
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(EpisodeDetail);
