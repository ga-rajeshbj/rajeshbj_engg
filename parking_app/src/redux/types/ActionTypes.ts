interface carNumber {
  type: "CAR_NUMBER";
  payload: any;
}

interface enterTime {
  type: "CAR_ENTER_TIME";
  payload: any;
}

interface exitTime {
  type: "CAR_EXIT_TIME";
  payload: any;
}

interface carDetails {
  type: "CAR_DETAILS";
  payload: any;
}
interface parkinglotnumber {
  type: "PARKING_LOT_NUMBER";
  payload: any;
}
export type ACTION =
  | carNumber
  | enterTime
  | exitTime
  | carDetails
  | parkinglotnumber;
