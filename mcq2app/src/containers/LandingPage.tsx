import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addName, setGender, setLanguage, setLanguagePreference } from "../redux/action/Action";
import { RootState } from "../redux/rootReducer";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const [personGender, setPersonGender] = useState("");
  const [personLanguage, setPersonLanguage] = useState("");
  const [personName, setPersonName] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.detailsReducer);

  const handleChange = (event: any): void => {
    setPersonGender(event.target.value);
  };
  const handleChangeLanguage = (event: any): void => {
    setPersonLanguage(event.target.value);
  };
  const handleChangeName = (event: any): void => {
    setPersonName(event.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addName(personName));
    dispatch(setGender(personGender));
    dispatch(setLanguage(personLanguage));
    dispatch(setLanguagePreference(personLanguage))
    console.log(state);
    history.push({
      pathname: "/mcqcontainer",
    });
  };
  console.log(state);
  return (
    <div data-testid="landing-container" >
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            id="standard-basic"
            label="Enter Name"
            variant="standard"
            onChange={handleChangeName}
          />
        </div>

        <div>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              labelId="gender"
              value={personGender}
              onChange={handleChange}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="gender">Language</InputLabel>
            <Select
              labelId="gender"
              value={personLanguage}
              onChange={handleChangeLanguage}
            >
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="hindi">Hindi</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
export default LandingPage;
