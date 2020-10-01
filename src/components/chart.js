import React, { useState, useEffect } from "react";
import * as visavail from "visavail";
import { Dataset } from "../components/data";
import "./visavail.css";

const options = {
  id_div_container: "alarm_bar_container",
  id_div_graph: "alarm_bar_div",
  date_in_utc: false,
  //width: document.getElementById("alarm_bar_div").offsetWidth,
  line_spacing: 24,
  custom_categories: true,
  tooltip: {
    height: 18,
    position: "overlay",
    left_spacing: 20,
    only_first_date: true,
    date_plus_time: true,
  },
  responsive: {
    enabled: true,
  },
};

const Chart = () => {
  const [state, setState] = useState();
  const alarm_bar = {};

  useEffect(() => {
    console.log(":In useeffect dataset = ", Dataset);
    alarm_bar["chart"] = visavail.generate(options, Dataset);
    // setState(visavail.generate(this.alarm_bar.options, this.alarm_bar.dataset));
  }, []);

  return (
    <div
      style={{ width: "100%", overflow: "hidden", marginTop: "1rem" }}
      className="visavail"
      id="alarm_bar_container"
    >
      <p id="alarm_bar_div" style={{ overflow: "hidden" }} />
    </div>
  );
};

export default Chart;
