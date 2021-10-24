import React, { useMemo, useEffect } from "react";

import { useTable, usePagination, useResizeColumns } from "react-table";

import { TableProps } from "../Types/Types";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

import { useHistory } from "react-router-dom";

function MainTable({ column, rows }: TableProps) {
  let history = useHistory();
  const columns = useMemo(() => column, [column]);
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
    usePagination,
    useResizeColumns
  );
  const { pageIndex } = state;

  useEffect(() => {
    setPageSize(20);

    gotoPage(pageCount - 1);
  }, [pageCount]);

  const displayJson = (data: any): void => {
    // history.push(`/rawjson/${data}`);
    history?.push({
      pathname: `/rawjson/${page}`,
      state: { data },
    });
  };

  return (
    <div>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  sx={{ fontWeight: 600 }}
                  // {...column.getHeaderProps()}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <TableRow
                {...row.getRowProps()}
                onClick={() => displayJson(row.original)}
              >
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}{" "}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="w-100 d-flex align-items-center justify-content-center ">
        <span className="mx-2 text-success">
          page {pageIndex + 1} of {pageOptions.length}
        </span>{" "}
        <Button className="mx-2" color="secondary" onClick={() => gotoPage(0)}>
          {" "}
          {"<<"}
        </Button>
        <Button
          color="primary"
          className="mx-2"
          variant="contained"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          previous page
        </Button>
        <Button
          variant="contained"
          className="mx-2"
          color="success"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          next page
        </Button>
        <Button
          color="secondary"
          className="mx-2"
          onClick={() => gotoPage(pageCount - 1)}
        >
          {" "}
          {">>"}
        </Button>
      </div>
    </div>
  );
}

export default MainTable;
