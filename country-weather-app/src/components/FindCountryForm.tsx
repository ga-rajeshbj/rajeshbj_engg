import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ResopnseData, Data } from "./types/Types";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addData, loading } from "../redux/actions/actions";
function FindCountryForm() {
  const [countryName, setCountryName] = useState("");

  const [data, setdata] = useState<ResopnseData | null>(null);
  let history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    //   try {
    // let response =
    //   }catch {

    //   }
    axios
      .get<ResopnseData>(`https://restcountries.com/v2/name/${countryName}`)
      .then((response) => {
        console.log(response.data);

        history.push("/CountryDetail");
      })
      .catch((error) => alert(error));
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          submit
        </Button>
      </form>
    </div>
  );
}

export default FindCountryForm;
