import React, { useState, useEffect } from "react";
import DataList from "../components/list";
import { DepartmentData, Users } from "../components/data";
import * as FaIcons from "react-icons/fa";

import UserDetails from "../components/userDetails";
import Grid from "@material-ui/core/Grid";

const PresentPage = () => {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [user, setUser] = useState();
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

  return (
    <Grid container>
      <Grid item xs={12} sm={5}>
        <div style={{ marginLeft: "215px" }}>
          <DataList
            title={state.title}
            data={state.data}
            icon={state.icon}
            handleShowUsers={handleShowUsers}
            setShowUserDetails={setShowUserDetails}
            setUser={setUser}
            handleShowDepartments={handleShowDepartments}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={7}>
        {showUserDetails && <UserDetails user={user} />}
      </Grid>
    </Grid>
  );
};

export default PresentPage;
