import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../components/redux/actions/FetchAction";
import { AppState } from "../components/redux/rootReducer";
import MainTable from "../components/Table/Table";
import { column } from "../components/Types/Types";
import CircularProgress from "@mui/material/CircularProgress";
function TableContainer() {
  const [post, setpost] = useState<number>(0);
  const Reduxstate = useSelector((state: AppState) => state.fechingReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchData(post));
    }, 1000);
    const interval = setInterval(() => {
      setpost(post + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [post]);

  const columns = React.useMemo(
    (): column[] => [
      {
        Header: "Title",
        accessor: "title",
        width: "900px",
        className: "w-25",
        widthStyle: {
          width: "200px",
        },
      },
      {
        Header: "URL",
        accessor: "url",

        width: "60px",
      },
      {
        Header: "Created At",
        accessor: "created_at",
      },
      {
        Header: "Author",
        accessor: "author",
      },
    ],
    []
  );

  return (
    <div className="d-flex justify-content-center align-items-center">
      {Reduxstate.data.length ? (
        <MainTable column={columns} rows={Reduxstate.data} />
      ) : (
        <CircularProgress color="primary" size={100} />
      )}
    </div>
  );
}

export default TableContainer;
