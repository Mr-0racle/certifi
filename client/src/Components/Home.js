import React from "react";
import { Link } from "react-router-dom";

// Assets
import BlockchainCredentialsImage from "../Images/blockchain_credentials.png";

// External Components
import {
  Grid,
  Box,
  Button,
  useMediaQuery,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 64px)",
    background: "linear-gradient(124deg, black, #5e1780)",
    color: "#ffffff",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center", // Ensures text is centered
  },
  leftPanel: {
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginTop: theme.spacing(2),
  },
  button: {
    fontWeight: "600",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  primaryButton: {
    backgroundColor: "#5e1780",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#3d0d5c",
    },
  },
  secondaryButton: {
    backgroundColor: "#ffffff",
    color: "#5e1780",
    "&:hover": {
      backgroundColor: "#e0e0e0",
    },
  },
  text: {
    color: "#d3d3d3",
  },
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={8}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="h4"
              style={{ fontWeight: "100", marginBottom: theme.spacing(1) }}
            >
              Verifiable Certificates
            </Typography>
            <Typography
              variant="h2"
              style={{ fontWeight: "900", marginBottom: theme.spacing(2) }}
            >
              Certifi
            </Typography>
            <Typography
              variant="body2"
              className={classes.text}
              style={{ maxWidth: "600px", marginBottom: theme.spacing(3) }}
            >
              A Decentralized Certificate Issuance and Verification System to
              create certificates that are Immutable, Cryptographically Secured,
              and have Zero Downtime. All powered by decentralized Ethereum
              Smart Contracts.
            </Typography>
            <Typography
              variant="h6"
              style={{ marginBottom: theme.spacing(1) }}
            >
              What are you looking for?
            </Typography>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                size="large"
                className={`${classes.button} ${classes.primaryButton}`}
                component={Link}
                to="/institute"
              >
                Issue Certificates
              </Button>
              <Button
                variant="contained"
                size="large"
                className={`${classes.button} ${classes.secondaryButton}`}
                component={Link}
                to="/view"
              >
                View Certificates
              </Button>
            </div>
          </Box>
        </Grid>
        {md && (
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="center">
              <img
                src={BlockchainCredentialsImage}
                alt="Blockchain Credentials"
                style={{ height: "85%", borderRadius: "12px" }}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default Home;
