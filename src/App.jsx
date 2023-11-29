import Pagination from "components/Pagination";
import Table from "components/Table";
import usePagination from "./hook/usePagination";
import { tableInfo } from "utils/contants";
import { useMemo } from "react";

function App() {
  const { currentPage, decreasePage, increasePage, totalPages, clickPage } = usePagination({ totalInfo: tableInfo.length });
  const info = useMemo(() => {
    return tableInfo.slice((currentPage - 1) * 10, currentPage * 10);
  }, [currentPage]);
  return (
    <div>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Surname</Table.Cell>
            <Table.Cell>Job</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {info.map((table) => (
            <Table.Row key={table.id}>
              <Table.Cell>{table.name}</Table.Cell>
              <Table.Cell>{table.surname}</Table.Cell>
              <Table.Cell>{table.job}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Pagination>
        <Pagination.Pages curentPage={currentPage} totalPages={totalPages} clickPage={clickPage} />
        <Pagination.Prev onClick={decreasePage} />
        <Pagination.Next onClick={increasePage} />
        {/* <Pagination.PerPage limit={limit} changeLimit={changeLimit} /> */}
      </Pagination>
    </div>
  );
}

export default App;
