import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Typography } from "@material-ui/core";
import ErrorImage from "../Images/error_image.png";
import NotFoundImage from "../Images/qns_image.png";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", justifyContent: "center", height: "100vh" },
  paper: {
    textAlign: "center",
    placeSelf: "center",
    height: "fit-content",
    padding: "30px",
    margin: "30px",
    width: "100%",
    maxWidth: "600px",
  },
}));

export function Error(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5" color="primary">
          {props.message}
        </Typography>
        {props.notFound ? (
          <img src={NotFoundImage} style={{ width: "100%" }} alt="Not Found" />
        ) : (
          <img src={ErrorImage} style={{ width: "100%" }} alt="Error" />
        )}
        <Typography variant="subtitle1">{props.label}</Typography>
        <Box m={3} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            window.location.reload();
          }}
        >
          {props.buttonText}
        </Button>
      </Paper>
    </Box>
  );
}
