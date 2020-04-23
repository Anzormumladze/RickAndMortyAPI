import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    marginTop: "300px",
  },
  card: {
    width: "350px",
  },
});

const Favorites = ({ favoritesId }) => {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    favoritesId.forEach(async (id) => {
      if (data.find((i) => i.id === id)) {
        return;
      }

      const result = await axios(
        `https://rickandmortyapi.com/api/episode/${id}`
      );
      const dataState = [...data, result.data];
      setData(dataState);
    });
  }, [data]);
  return (
    <div className={classes.cardContainer}>
      {data
        ? data.map((data) => {
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
              </Card>
            );
          })
        : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favoritesId: state.episodes.favoritesId,
  };
};

Favorites.propTypes = {
  favoritesId: PropTypes.object,
};

export default connect(mapStateToProps)(Favorites);
