import React from "react";

export const DataFilter = ({ column }: any) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="search......"
      />
    </span>
  );
};
