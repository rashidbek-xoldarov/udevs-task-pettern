import Pagination from "components/Pagination";
import Body from "./components/Body";
import Cell from "./components/Cell";
import Head from "./components/Head";
import Row from "./components/Row";

import "./index.scss";

const Table = ({ children }) => {
  return (
    <div>
      <table className="table">{children}</table>
    </div>
  );
};

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
