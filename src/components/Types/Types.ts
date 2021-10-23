import { hit } from "../redux/ActionTypes";

export type column = {
  Header: string;
  accessor: any;
};

export type user = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export interface TableProps {
  column: any;
  rows: any;
}
