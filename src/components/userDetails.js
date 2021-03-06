import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DatePicker from "../components/datepicker";
import "./userdetails.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Chart from "./chart";
import Grow from "@material-ui/core/Grow";
import Fade from "@material-ui/core/Fade";

import Box from "./box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const UserDetails = ({ user }) => {
  const classes = useStyles();
  return (
    <Grid justify="center" alignItems="center" container>
      {/* <Grid
        style={{ marginTop: "1rem" }}
        justify="center"
        alignItems="center"
        className="item-center"
        item
        xs={12}
        sm={12}
      >
        <Avatar style={{ margin: "0 0.5rem" }}>R</Avatar> <p> {user}</p>
      </Grid> */}
      <Grid justify="center" alignItems="center" item xs={12} sm={5}>
        <DatePicker label="Date debut" />
      </Grid>
      <Grid justify="center" alignItems="center" item xs={12} sm={5}>
        <DatePicker label="Date fm" />
      </Grid>
      <Grid justify="center" alignItems="center" item xs={12} sm={2}>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Export
      </Button> 
</Grid>

      <Grid item xs={12} sm={12}>
        <Fade in={true} {...{ timeout: 1000 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box label="Action" color="#91d18b" />
            <Box label="Pause" color="#0278ae" />
            <Box label="Repas" color="#a6a6a4" />
            <Box label="Inco(+)" color="#b83b5e" />
            <Box label="Inco(-)" color="#6a2c70" />
            <Box label="En Service" color="#5cb85c" />
          </div>
        </Fade>

        <Chart />
      </Grid>
    </Grid>
  );
};

export default UserDetails;
