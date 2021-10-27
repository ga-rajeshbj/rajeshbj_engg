import { Button, TextField, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { ResopnseData } from "./types/Types";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addData, loading } from "../redux/actions/actions";
import { RootState } from "../redux/rootReducer";
const FindCountryForm = () => {
  const [countryName, setCountryName] = useState("");
  const loadingData = useSelector((state: RootState) => state.reducer.loading);

  let history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    dispatch(loading());
    await axios
      .get<ResopnseData>(`https://restcountries.com/v2/name/${countryName}`)
      .then((response) => {
        console.log(response.data);
        dispatch(addData(response.data));
        history.push("/CountryDetail");
      })
      .catch((error) => alert(error));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loadingData ? (
        <CircularProgress />
      ) : (
        <div>
          <h1>Enter Country</h1>
          <form
            onSubmit={(e) => handleSubmit(e)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
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
      )}
    </div>
  );
};

export default FindCountryForm;
