// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { boundRequestTodos } from "./redux/actions/Actions";
// import { AppState } from "./redux/rootReducer";
// function Example() {
//   const state = useSelector((state: AppState) => state.fechingReducer);

//   //intilize the dspatch
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(boundRequestTodos());
//   }, []);

//   console.log(state);
//   return <h1>example</h1>;
// }

// export default Example;

import React, { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTable, usePagination } from "react-table";
import axios from "axios";

import { AppState } from "../redux/rootReducer";
import { fetchData } from "../redux/actions/FetchAction";
import { hit } from "../redux/ActionTypes";
import { TableProps } from "../Types/Types";

function Table({ column, rows }: TableProps) {
  const [post, setPost] = useState<number>(0);
  const [list, setList] = useState<hit[] | []>([]);

  const columns = useMemo(() => column, []);
  const data = useMemo(() => rows, [rows]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    gotoPage,
    pageCount,
    pageOptions,
    setPageSize,
    state,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );
  const { pageIndex, pageSize } = state;
  console.log(pageSize);

  useEffect(() => {
    setPageSize(20);
    console.log("pagecount", pageCount);
    gotoPage(pageCount - 1);
  }, [pageCount]);
  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")} </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          page {pageIndex + 1} of {pageOptions.length}
        </span>{" "}
        <button onClick={() => gotoPage(0)}> {"<<"}</button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          previous page
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          next page
        </button>
        <button onClick={() => gotoPage(pageCount - 1)}> {"<<"}</button>
      </div>
    </div>
  );
}

export default Table;
