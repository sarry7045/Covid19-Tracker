import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import "../Components/CSS/Card2.css";

const Card2 = ({ cardTitle, value, lastUpdate, cardSubtitle }) => {
  return (
    <>
      <Grid item xs={12} md={3} component={Card} className="Card2-card">
        <CardContent className="infected">
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {cardTitle}
          </Typography>
          <Typography variant="h5" component="h2">
            <CountUp start={0} end={value} duration={2.75} separator="," />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            {cardSubtitle}
          </Typography>
        </CardContent>
      </Grid>
    </>
  );
};

export default Card2;
