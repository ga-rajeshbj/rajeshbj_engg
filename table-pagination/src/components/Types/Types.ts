import { hit } from "../redux/ActionTypes";

export type column = {
  Header: string;
  accessor: any;
  width?: string;
  maxWidth?: any;
  minWidth?: any;
  widthStyle?: any;
  className?: string;
  filter?: any;
  canFilter?: any;
  utc?: boolean;
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
