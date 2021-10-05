import {
  Button,
  Container,
  Divider,
  Grid,
  List,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MyInfoCard from "./components/card";

function HomePage() {
  function TitleBar({ title }) {
    return (
      <>
        <Grid container margin="10px" display="flex" direction="row">
          <Typography marginTop={"7px"} variant="h4">
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button>See all</Button>
        </Grid>
        <Divider />
      </>
    );
  }
  return (
    <Box width="100%">
      <Container maxWidth="100%">
        <TitleBar title="Bookings" />
        <Grid container marginTop={"0px"} spacing={2}>
          <Grid item xs={6} sm={6} md={3}>
            <MyInfoCard title="15" subTitle="Today " />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <MyInfoCard title="26" subTitle="Yesterday " />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <MyInfoCard title="103" subTitle="Last 7 days " />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <MyInfoCard title="241" subTitle="This month" />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <MyInfoCard title="345" subTitle="Last month" />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <MyInfoCard title="20.1K" subTitle="All time" />
          </Grid>
        </Grid>

        <TitleBar title="Members" />

        <Grid container marginTop={"0px"} spacing={2}>
          <Grid item xs={6} sm={6} md={3}>
            <MyInfoCard title="4" subTitle="Today" />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <MyInfoCard title="9" subTitle="Yesterday " />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <MyInfoCard title="42" subTitle="Last 7 days " />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <MyInfoCard title="541" subTitle="This month" />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <MyInfoCard title="420" subTitle="Last month " />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <MyInfoCard title="5310" subTitle="All time" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HomePage;
