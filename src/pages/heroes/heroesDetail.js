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
import { setFavorite, removeFavorite } from "../../redux/heroes/heroesAction";
const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
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
}) => {
  const isInFavorite = (id) => getFavorites.find((myId) => myId === id);
  const clickHandler = (item) => {
    if (isInFavorite(item.id)) {
      deleteFavor(item.id);
    } else {
      setFavor(item.id);
    }
  };

  const classes = useStyles();

  console.log(getDetailData);
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getDetailData: state.heroes.detailData,
    getFavorites: state.heroes.favoritesId,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    setFavor: (id) => dispatch(setFavorite(id)),
    deleteFavor: (id) => dispatch(removeFavorite(id)),
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(HeroesDetails);
