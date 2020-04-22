import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { makeStyles } from "@material-ui/core/styles";
import FbComments from "../../components/fbcomment";
import {
  setFavorite,
  removeFavorite,
  setEpisodeList,
} from "../../redux/heroes/heroesAction";
const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "200px",
  },
  root: {
    width: "350px",
  },
  media: {
    height: 0,
    paddingTop: "90%",
  },
});

const HeroesDetails = ({
  getDetailData,
  deleteFavor,
  setFavor,
  getFavorites,
  setEpisodeList,
  getEpisodeList,
}) => {
  const isInFavorite = (id) => getFavorites.find((myId) => myId === id);
  const clickHandler = (item) => {
    if (isInFavorite(item.id)) {
      deleteFavor(item.id);
    } else {
      setFavor(item.id);
    }
  };

  const episodeShowhandler = (data) => {
    let numberPattern = /\d+/g;

    const newarr = data.episode.map((element) => {
      return element.match(numberPattern);
    });

    const episodelist = [...newarr].join(",");
    setEpisodeList(episodelist);
  };

  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <Card className={classes.root} key={getDetailData.id}>
        <CardHeader
          title={getDetailData.name}
          subheader={`ID:${getDetailData.id} STATUS:${getDetailData.status}`}
        />
        <CardMedia
          className={classes.media}
          image={getDetailData.image}
          title="Paella dish"
        />
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" color="textSecondary" component="span">
              Species:{getDetailData.species}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              Gender:{getDetailData.gender}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              Species:{getDetailData.species}
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing>
          {
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
          }
        </CardActions>
      </Card>
      <div>
        <Button onClick={() => episodeShowhandler(getDetailData)}>
          SHOW EPISODE LIST
        </Button>
      </div>
      <div>
        <CardContent>
          <Typography color="textSecondary" noWrap>
            {getEpisodeList}
          </Typography>
        </CardContent>
      </div>
      <div>
        <FbComments />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getDetailData: state.heroes.detailData,
    getFavorites: state.heroes.favoritesId,
    getEpisodeList: state.heroes.episodeList,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    setFavor: (id) => dispatch(setFavorite(id)),
    deleteFavor: (id) => dispatch(removeFavorite(id)),
    setEpisodeList: (list) => dispatch(setEpisodeList(list)),
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(HeroesDetails);
