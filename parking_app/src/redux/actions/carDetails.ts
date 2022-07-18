import { Dispatch } from "redux";

import { ACTION } from "../types/ActionTypes";

const addCarNumber = (number: any) => ({
  type: "CAR_NUMBER",
  payload: number,
});
const carEnterTime = (number: any) => ({
  type: "CAR_ENTER_TIME",
  payload: number,
});
const carExitTime = (number: any) => ({
  type: "CAR_EXIT_TIME",
  payload: number,
});

const carDetails = (details: any) => ({
  type: "CAR_DETAILS",
  payload: details,
});

const parkingLotNumber = (details: any) => ({
  type: "PARKING_LOT_NUMBER",
  payload: details,
});

export {
  addCarNumber,
  carEnterTime,
  carExitTime,
  carDetails,
  parkingLotNumber,
};
