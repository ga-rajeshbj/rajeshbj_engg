import { Button, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { AstroidData } from "../components/Types";

function FindingForm() {
  const [asteroidID, setAsteroidID] = useState<null | number>(null);
  const [disable, setDisable] = useState<boolean>(false);

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAsteroidID(Number(event.target.value));
  };
  const url = `https://api.nasa.gov/neo/rest/v1/neo/${asteroidID}?api_key=l9gVhCIXkd0fU9fY4Zxy7aK0aqNrAitrJAep5ZjA`;

  let history = useHistory();

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    getData(url);
  };

  const getRamdomAstroid = async () => {
    const reandomUrl =
      "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=l9gVhCIXkd0fU9fY4Zxy7aK0aqNrAitrJAep5ZjA";

    let response: any = await axios.get(reandomUrl);
    let astroids = response.data.near_earth_objects;
    let id = astroids[Math.floor(Math.random() * astroids.length)].id;
    const url = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=l9gVhCIXkd0fU9fY4Zxy7aK0aqNrAitrJAep5ZjA`;
    getData(url);
  };

  const getData = async (url: string) => {
    await axios
      .get<AstroidData>(url)
      .then((response) => {
        const { id, nasa_jpl_url, is_potentially_hazardous_asteroid, name } =
          response.data;

        history?.push({
          pathname: `./astroidDetails/${id}/${name}`,
          state: { nasa_jpl_url, is_potentially_hazardous_asteroid, name },
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <h1 className="text-success">Find The Asteroider Using id</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          id="outlined-basic"
          label="Enter Asteroid ID"
          variant="standard"
          placeholder="Enter Asteroid ID"
          size="small"
          required
          onChange={handleIdChange}
          type="number"
        />
        <br></br>
        <Button
          type="submit"
          disabled={asteroidID ? false : true}
          color="primary"
          variant="contained"
          className="mt-2"
        >
          submit
        </Button>
      </form>

      <div>
        {" "}
        <Button
          onClick={() => {
            getRamdomAstroid();
            setDisable(true);
          }}
          color="secondary"
          variant="contained"
          className="mt-5"
          disabled={disable}
        >
          Rondom Astroid
        </Button>
      </div>
    </div>
  );
}

export default FindingForm;
