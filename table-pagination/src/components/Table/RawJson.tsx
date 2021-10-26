import { Button, Typography } from "@mui/material";
import { hit } from "../redux/ActionTypes";
interface Props {
  displayJson: hit | undefined;
  closeModal: () => void;
}
const RawJson = (props: Props) => {
  return (
    <div>
      <h1 className="text-success text-center">Raw JSON Display</h1>
      <Typography style={{ overflowWrap: "break-word" }} className="p-2 my-3">
        {" "}
        {JSON.stringify(props.displayJson)}
      </Typography>

      <div className="d-flex align-items-center justify-content-center">
        <Button
          variant="contained"
          color="primary"
          className="m-3"
          onClick={props.closeModal}
        >
          {" "}
          close{" "}
        </Button>
      </div>
    </div>
  );
};

export default RawJson;
