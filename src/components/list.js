import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import * as MdIcons from "react-icons/md";
import Avatar from "@material-ui/core/Avatar";
import Grow from "@material-ui/core/Grow";
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
  setShowLoader,
}) => {
  console.log("DATA = ", data);
  console.log("TITLE = ", title);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = (e) => {
    console.log("Clicked title=", title);
    title === "Departments" && handleShowUsers();
    title === "Users" && setShowUserDetails(true);
    title === "Users" && setShowLoader(true);
    const selectedUser = data.filter(
      (item) => item.name == e.target.textContent
    );
    title === "Users" && setUser(selectedUser[0]);
    setOpen(!open);
  };

  const handleBack = () => {
    setShowUserDetails(false);
    setShowScheduler(false);
    handleShowDepartments();
  };

  console.log("TILTE = ", title);

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
        <Grow in={true} {...{ timeout: 1000 }}>
          <ListItem key={index} button onClick={handleClick}>
            <ListItemIcon>{icon}</ListItemIcon>
            {title == "Users" && (
              <Avatar
                style={{ marginRight: "1rem", pointerEvents: "none" }}
                alt={item.name}
                src={item.img}
              />
            )}
            {title == "Users" ? (
              <ListItemText primary={item.name} />
            ) : (
              <ListItemText primary={item} />
            )}
          </ListItem>
        </Grow>
      ))}
    </List>
  );
};

export default DataList;
