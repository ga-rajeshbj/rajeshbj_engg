import { Data } from "../../components/types/Types";

interface Loading {
  type: "LOADING";
}
interface AddData {
  type: "ADD_DATA";
  payload: Data[];
}

export type ACTION = AddData | Loading;
