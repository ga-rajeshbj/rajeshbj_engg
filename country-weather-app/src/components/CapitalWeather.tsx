import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CapitalWeather = () => {
  const [weatherData, setWeatherData] = useState<any>();
  const param = useParams<any>();
  console.log(param);
  useEffect(() => {
    const weather = async () => {
      await axios
        .get(
          `http://api.weatherstack.com/current?access_key=24c306d5bfb898c74721ced13cda3328&query=${param.capital}`
        )
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          setWeatherData(data);
        })
        .catch((error) => alert(error));
    };
    weather();
  }, []);
  console.log(weatherData);
  return (
    <div>
      {weatherData ? (
        <Container>
          <Card sx={{ width: 345 }}>
            <CardMedia
              component="img"
              height="auto"
              image={weatherData.current.weather_icons[0]}
              alt={weatherData.location && weatherData.location.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {weatherData.location.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Temperature: {weatherData.current.temperature}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Wind Speed: {weatherData.current.wind_speed}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Precip: {weatherData.current.precip}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default CapitalWeather;
