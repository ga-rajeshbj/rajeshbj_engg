import { ACTION } from "../types/ActionTypes";

interface State {
  carDetails: {
    carNumber: any;
    carExitTime: any;
    carEnterTime: any;
    isParked: boolean;
  }[];
  parkinglotNumber: any;
}

const initialState: State = {
  carDetails: [],
  parkinglotNumber: "",
};

export const carDetailsReducer = (state = initialState, action: ACTION) => {
  switch (action.type) {
    case "CAR_DETAILS":
      return {
        ...state,
        carDetails: [...state.carDetails, action.payload],
      };
    case "PARKING_LOT_NUMBER":
      return {
        ...state,
        parkinglotNumber: action.payload,
      };
    default:
      return state;
  }
};
