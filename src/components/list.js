import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import * as MdIcons from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const DataList = ({
  title,
  data,
  icon,
  handleShowUsers,
  setShowUserDetails,
  setUser,
  handleShowDepartments,
  setShowScheduler,
}) => {
  console.log("DATA = ", data);
  console.log("TITLE = ", title);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = (e) => {
    console.log(e.target, e.target.textContent);
    console.log("Clicked title=", title);
    title === "Departments" && handleShowUsers();
    title === "Users" && setShowUserDetails(true);
    title === "Users" && setUser(e.target.textContent);
    setOpen(!open);
  };

  const handleBack = () => {
    setShowUserDetails(false);
    setShowScheduler(false);
    handleShowDepartments();
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          style={{ display: "flex", alignItems: "center" }}
          component="div"
          id="nested-list-subheader"
        >
          {title == "Users" && (
            <MdIcons.MdKeyboardBackspace
              onClick={handleBack}
              style={{ fontSize: "1.5rem", margin: "0 0.5rem" }}
            />
          )}
          {title}
        </ListSubheader>
      }
      className={classes.root}
    >
      {data.map((item, index) => (
        <ListItem key={index} button onClick={handleClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
};

export default DataList;
