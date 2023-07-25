import React from "react";
import { useTable, usePagination } from "react-table";
import CardLayout from "./CardLayout";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const WPTable = ({ apiData }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Address",
        accessor: "addr",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Zip",
        accessor: "zip",
      },
    ],
    []
  );
  const data = apiData.map((property) => {
    const date = new Date(property.created_at);

    return {
      // id: property.id,
      addr: property.address,
      city: property.city_state.split(", ")[0],
      state: property.city_state.split(", ")[1],
      zip: property.zip,
      created: `${date.getMonth()}-${date.getDay()}-${date
        .getFullYear()
        .toString()
        .substring(2)}`,
    };
  });

  function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize },
    } = useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 0, pageSize: 20 },
      },
      usePagination
    );

    // Table UI
    return (
      <>
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className="text-left">
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="text-xs lg:text-base">
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* 
          Pagination can be built however you'd like. 
          This is just a very basic UI implementation:
        */}
        <div className="flex flex-col items-center justify-center w-full gap-2 mx-auto mt-2 text-xs">
          <div>
            <button
              className="px-2 py-1 mr-2 border-black bg-mainBlue"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {"<<"}
            </button>
            <button
              className="px-2 py-1 mr-2 border-black bg-mainGray dark:bg-zinc-500 "
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              {"<"}
            </button>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="px-2 py-1 mr-2 border-black bg-mainGray dark:bg-zinc-500"
            >
              {">"}
            </button>
            <button
              className="px-2 py-1 mr-2 border-black bg-mainBlue"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </div>
          <div>
            <span className="mx-auto">
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
          </div>
          <div>
            <select
              value={pageSize}
              className="px-2 py-1 bg-mainGray dark:bg-zinc-500 "
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50, 100, 200].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </>
    );
  }

  const options = {
    reponsive: true,
  };
  return (
    <CardLayout title="Detailed Properties" icon={faPlus}>
      <Table columns={columns} data={data} options={options} />
    </CardLayout>
  );
};

export default WPTable;
