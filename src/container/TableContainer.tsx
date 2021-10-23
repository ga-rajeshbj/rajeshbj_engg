import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../components/redux/actions/FetchAction";
import { AppState } from "../components/redux/rootReducer";
import Table from "../components/Table/Table";
import { column } from "../components/Types/Types";

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

  // setTimeout(() => {
  //   setpost(post + 1);
  //   console.log(post);
  //
  // }, 1000);
  const columns = React.useMemo(
    (): column[] => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "URL",
        accessor: "url",
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

  console.log("length", Reduxstate.data.length);
  return (
    <div>
      <Table column={columns} rows={Reduxstate.data} />

      <button onClick={() => dispatch(fetchData(post + 1))}>increse</button>
    </div>
  );
}

export default TableContainer;
