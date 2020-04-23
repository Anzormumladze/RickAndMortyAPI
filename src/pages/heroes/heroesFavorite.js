import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";



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

const Favorites = ({ favoritesId }) => {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    favoritesId.forEach(async (id) => {
      if (data.find((i) => i.id === id)) {
        return;
      }

      const result = await axios(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const dataState = [...data, result.data];
      setData(dataState);
    });
  }, [data]);
  return (
    <div className={classes.cardContainer}>
      {data
        ? data.map((data) => {
          console.log(data)
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
