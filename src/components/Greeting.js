import React from "react";

function Greeting() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30
  };

  if (hours < 12) {
    timeOfDay = "Morning";
    styles.color = "#96C8FA";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
    styles.color = "#64C8FA";
  } else {
    timeOfDay = "Night";
    styles.color = "#C86464";
  }
  return <h1> Good {timeOfDay} Austin!</h1>;
}

export default Greeting;
