import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Pagination from "@material-ui/lab/Pagination";

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

const EpisodesList = ({ getData }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.cardContainer}>
        {getData.results
          ? getData.results.map((data) => {
              return (
                <Card className={classes.card}>
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
                    <Button size="medium">show more</Button>
                    <Button startIcon={<FavoriteBorderIcon />} size="medium">
                      ADD
                    </Button>
                  </CardActions>
                </Card>
              );
            })
          : null}
      </div>
      <div className={classes.paginationContainer}>
        <Pagination count={2} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getData: state.episodes.fetchData,
  };
};

export default connect(mapStateToProps)(EpisodesList);
