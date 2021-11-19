import { Button, Typography } from "@mui/material";
import React from "react";
import { useLocation, useHistory } from "react-router-dom";

function RawJson() {
  const location = useLocation();

  const history = useHistory();
  const returnTable = () => {
    history.goBack();
  };
  return (
    <div>
      <h1 className="text-success text-center">Raw JSON Display</h1>
      <Typography data-testid="data-id" style={{ overflowWrap: "break-word" }} className="p-2 my-3">{JSON.stringify(location.state)}</Typography>

      <div className="d-flex align-items-center justify-content-center">
        <Button
          onClick={() => returnTable()}
          variant="contained"
          color="primary"
          className="m-3"
        >
          {" "}
          {"<<"} return{" "}
        </Button>
      </div>
    </div>
  );
}

export default RawJson;
