import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setFavorite, removeFavorite } from "../../redux/heroes/heroesAction";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
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
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function RecipeReviewCard({ getData, getFavorites, setFavor, deleteFavor }) {
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
                    style={{ display: "flex", justifyContent: "space-between" }}
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
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            );
          })
        : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    getData: state.heroes.fetchData,
    getFavorites: state.episodes.favoritesId,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    setFavor: (id) => dispatch(setFavorite(id)),
    deleteFavor: (id) => dispatch(removeFavorite(id)),
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(RecipeReviewCard);
