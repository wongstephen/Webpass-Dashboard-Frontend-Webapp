import React from "react";
import { useTable, usePagination } from "react-table";

const WPTable = ({ apiData }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
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
      {
        Header: "Created",
        accessor: "created",
      },
    ],
    []
  );
  const data = apiData.map((property) => {
    const date = new Date(property.created_at);

    return {
      id: property.id,
      addr: property.address,
      city: property.city_state.split(", ")[0],
      state: property.city_state.split(", ")[1],
      zip: property.zip,
      created: `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
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
        initialState: { pageIndex: 0, pageSize: 100 },
      },
      usePagination
    );

    // Table UI
    return (
      <>
        {/* The following is for debugging */}
        {/* 
        <pre>
          <code>
            {JSON.stringify(
              {
                pageIndex,
                pageSize,
                pageCount,
                canNextPage,
                canPreviousPage,
              },
              null,
              2
            )}
          </code>
        </pre> 
        */}
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
                <tr {...row.getRowProps()}>
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
        <div className="flex items-center justify-center w-full mx-auto mt-8">
          <button
            className="px-2 py-1 mr-2 border-4 border-black shadow-neub bg-brutalBlue"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {"<<"}
          </button>
          <button
            className="px-2 py-1 mr-2 border-4 border-black shadow-neub bg-brutalPurple"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"<"}
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="px-2 py-1 mr-2 border-4 border-black shadow-neub bg-brutalPurple "
          >
            {">"}
          </button>
          <button
            className="px-2 py-1 mr-2 border-4 border-black shadow-neub bg-brutalBlue"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>
          <span className="mx-8">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            className="px-2 py-1 mr-2 border-4 border-black shadow-neub bg-brutalGreen"
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
      </>
    );
  }

  const Filter = () => {
    return (
      <div className="w-full mt-12 ml-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="inline w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>

        <p className="inline ml-8 text-lg font-bold">Filter By</p>
        <span className="p-6 ml-4 font-bold tracking-wider text-white bg-purple-600 border-4 border-black rounded-md shadow-neub">
          {" "}
          For Placement only. Filter feature TBD
        </span>

        <div className="mt-8">
          <p className="inline mr-8">State</p>
          {["WA", "CA", "OR", "IA", "GA"].map((state) => {
            return (
              <button className="px-4 py-1 mr-4 border-4 border-black shadow-neub bg-brutalYellow">
                {state}
              </button>
            );
          })}
        </div>
        <div className="mt-8">
          <p className="inline mr-8">City</p>
          {["Seattle", "Tacoma", "Kirkland", "Renton", "Beaverton"].map(
            (state) => {
              return (
                <button className="px-4 py-1 mr-4 border-4 border-black shadow-neub bg-brutalRed">
                  {state}
                </button>
              );
            }
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap w-full mt-16 bg-white border-4 border-black rounded-md shadow-neub">
      <div className="flex items-center justify-center flex-1 w-full h-20 border-b-4 border-black bg-brutalGreen">
        <p className="font-bold text-center md:text-4xl ">
          Full List of Addresses
        </p>
      </div>
      <Filter />
      <div className="w-full p-8 mt-18">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default WPTable;
