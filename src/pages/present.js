import React, { useState, useEffect } from "react";
import DataList from "../components/list";
import { DepartmentData, Users } from "../components/data";
import * as FaIcons from "react-icons/fa";
import TimelineView from "../components/timelinescheduler/timelineview";
import UserDetails from "../components/userDetails";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Switch from "@material-ui/core/Switch";
import PuffLoader from "../components/puffloader";
import Grow from "@material-ui/core/Grow";
import Fade from "@material-ui/core/Fade";

const PresentPage = () => {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showScheduler, setShowScheduler] = useState(false);
  const [user, setUser] = useState();
  const [showLoader, setShowLoader] = useState(false);
  const [state, setState] = useState({
    title: "Departments",
    data: DepartmentData,
    icon: <FaIcons.FaAngleRight />,
  });

  const handleShowDepartments = () =>
    setState({
      title: "Departments",
      data: DepartmentData,
      icon: <FaIcons.FaAngleRight />,
    });

  const handleShowUsers = () =>
    setState({
      title: "Users",
      data: Users,
      icon: <FaIcons.FaUserAlt />,
    });

  const handleSwitch = () => {
    setShowScheduler(!showScheduler);
    setShowLoader(true);
  };

  console.log("USER  = ", user);

  if (showLoader) {
    return <PuffLoader setShowLoader={setShowLoader} />;
  } else
    return (
      <Grid container>
        <Grid item xs={12} sm={5}>
          <div style={{ marginLeft: "215px" }}>
            <DataList
              setShowLoader={setShowLoader}
              title={state.title}
              data={state.data}
              icon={state.icon}
              handleShowUsers={handleShowUsers}
              setShowUserDetails={setShowUserDetails}
              setUser={setUser}
              handleShowDepartments={handleShowDepartments}
              setShowScheduler={setShowScheduler}
            />
          </div>
        </Grid>

        {(showScheduler || showUserDetails) && (
          <Grid
            justify="center"
            style={{ padding: "0.2rem 1rem" }}
            item
            xs={12}
            sm={7}
          >
            <Grid
              style={{ marginBottom: "0.2rem" }}
              justify="space-around"
              alignItems="center"
              className="item-center"
              item
              xs={12}
              sm={12}
            >
              <div>
                <Switch
                  checked={showScheduler}
                  onChange={handleSwitch}
                  name="scheduler"
                  color="primary"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />

                <small>Scheduler</small>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar src={user.img} style={{ margin: "0 0.5rem" }}></Avatar>
                <p> {user.name}</p>
              </div>
            </Grid>

            {showUserDetails && !showScheduler && <UserDetails user={user} />}

            {showScheduler && <TimelineView user={user} />}
          </Grid>
        )}
        {console.log("showLoader = ", showLoader)}
      </Grid>
    );
};

export default PresentPage;
