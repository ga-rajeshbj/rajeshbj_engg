import React from "react";
import moment from "moment";
export const DataFilter = ({ column }: any) => {
  const { filterValue, setFilter } = column;
  const utcConverter = (date: string): string => {
    let local = moment.utc(date).local().format("YYYY-MMM-DD h:mm A");
    console.log(local.toString());
    return local.toString();
  };
  return (
    <span>
      <input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value);
          console.log(column);
        }}
        placeholder={`search by ${column.Header}......`}
      />
    </span>
  );
};
