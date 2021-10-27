import { Button } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducer";

function CountryDetails() {
  const state = useSelector((state: RootState) => state.reducer);
  console.log(state);

  return (
    <div>
      {/* {data.map((coutry: any, index: any) => {
        return (
          <ul key={index}>
            <li> name : {coutry.name} </li>
            <li>capital : {coutry.capital}</li>
            <li>Population : {coutry.population}</li>
            <li>latitude : {coutry.latlng ? coutry.latlng[0] : "0"}</li>
            <li>longitude : {coutry.latlng ? coutry.latlng[1] : "0"}</li>
            <li>
              Flag : <img src={coutry.flags["svg"]} width={50} />
            </li>

            <Button
              style={{ marginTop: "1rem" }}
              type="submit"
              variant="contained"
              color="primary"
            >
              Capital Weather
            </Button>
          </ul>
        );
      })} */}
    </div>
  );
}

export default CountryDetails;
