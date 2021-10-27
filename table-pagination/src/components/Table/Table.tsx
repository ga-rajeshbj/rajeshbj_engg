import React, { useState, useMemo, useEffect } from "react";
import moment from "moment";
import {
  useTable,
  usePagination,
  useResizeColumns,
  useFilters,
} from "react-table";
import { DataFilter } from "./Filter";

import { TableProps } from "../Types/Types";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import RawJson from "./RawJson";
import { Box } from "@mui/material";
import { hit } from "../redux/ActionTypes";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function MainTable({ column, rows }: TableProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [object, setObject] = useState<hit | undefined>();
  const handleClose = () => setOpen(false);

  const utcConverter = (date: string): string => {
    let local = moment.utc(date).local().format("YYYY-MMM-DD h:mm A");
    return local.toString();
  };
  // rows = rows.map((data: any) => {
  //   return {
  //     ...data,
  //     created_at: utcConverter(data.created_at),
  //   };
  // });
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
      defaultColumn: { Filter: DataFilter },
    },
    useFilters,
    usePagination,
    useResizeColumns
  );
  const { pageIndex } = state;

  useEffect(() => {
    const gotopage = async () => {
      await setPageSize(20);

      await gotoPage(pageCount - 1);
    };
    console.log("object", pageCount);
    gotopage();
  }, [pageCount]);

  const displayJson = (data: any): void => {
    setOpen(true);
    setObject(data);
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
                  <span>{column.render("Header")}</span>
                  <br />

                  <span>{column.filter ? column.render("Filter") : null}</span>
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
                onClick={() => {
                  displayJson(row.original);
                }}
              >
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
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

      <div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <RawJson displayJson={object} closeModal={handleClose} />
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default MainTable;
