import React from "react";
import { Grid } from "@material-ui/core";
import "../Components/CSS/Cardd.css";
import Card2 from "./Card2";
import { ScaleLoader } from "react-spinners";

const Cardd = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <ScaleLoader color="#295FFF" />;
  }
  return (
    <>
      <div className="Cardd-container">
        {/* <Typography gutterBottom variant="h4" component="h2">
          Global
        </Typography> */}
        <Grid container spacing={4} justify="center">
          <Card2
            className="infected"
            cardTitle="Infected"
            value={confirmed.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of active cases from COVID-19."
          />
          <Card2
            className="recovered"
            cardTitle="Recovered"
            value={recovered.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of recoveries from COVID-19."
          />
          <Card2
            className="deaths"
            cardTitle="Deaths"
            value={deaths.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of deaths caused by COVID-19."
          />
        </Grid>
      </div>
    </>
  );
};

export default Cardd;
