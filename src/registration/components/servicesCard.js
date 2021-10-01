import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

export default function ServicesCard() {
  return (
    <>
      <Typography className="text-style">OUR CAR SERVICES.</Typography>
      <Grid
        container
        style={{
          justifyContent: "center",
          textAlign: "center",
          padding: "15px",
        }}
      >
        <MyCard title="Exterior Washes" image="images/registration/card1.jpg" />
        <MyCard
          title="Interior Detailing"
          image="images/registration/card2.jpg"
        />
        <MyCard title="Extra Services" image="images/registration/card3.jpg" />
      </Grid>
    </>
  );
}

 function MyCard({ title, image }) {
  return (
    <Grid item sm={6} md={4}>
      <Card variant="outlined" style={{ margin: "20px " }}>
        <CardActionArea>
          <CardMedia component="img" height="170" image={image} alt={title} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{
                textTransform: "uppercase",
                fontSize: "17px",
                letterSpacing: "1",
              }}
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
