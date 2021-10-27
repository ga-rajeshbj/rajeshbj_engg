import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";

import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../redux/rootReducer";

const boxstyle = {
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const CountryDetails = () => {
  let history = useHistory();
  const data = useSelector((state: RootState) => state.reducer.data);
  const loading = useSelector((state: RootState) => state.reducer.loading);
  console.log(data);

  const handleCapitalWeather = (capital: any) => {
    history.push(`/CountryDetail/${capital}`);
  };

  return (
    <div>
      <Box
        border={1}
        borderColor="grey.300"
        bgcolor="white.main"
        boxShadow={3}
        mx="auto"
        mt="2rem"
        sx={boxstyle}
      >
        {data.map((country: any, index: any) => {
          return (
            <Card sx={{ width: 300, margin: "0 20px" }}>
              <CardMedia
                component="img"
                height="140"
                image={country.flags["svg"]}
                alt={country.name}
              />
              <CardContent>
                <Typography> name : {country.name} </Typography>
                <Typography>capital : {country.capital}</Typography>
                <Typography>Population : {country.population}</Typography>
                <Typography>
                  latitude : {country.latlng ? country.latlng[0] : "0"}
                </Typography>
                <Typography>
                  longitude : {country.latlng ? country.latlng[1] : "0"}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  style={{ marginTop: "1rem" }}
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleCapitalWeather(country.capital);
                  }}
                >
                  Capital Weather
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </div>
  );
};

export default CountryDetails;
