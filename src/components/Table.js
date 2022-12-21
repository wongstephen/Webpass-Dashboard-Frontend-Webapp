import React from "react";
import { useTable } from "react-table";

const Table = ({ apiData, getCountPerState }) => {
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
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div className="flex flex-wrap w-full mt-16 bg-white border-4 border-black rounded-md shadow-neub">
      <div className="flex items-center justify-center flex-1 w-full h-20 border-b-4 border-black bg-brutalGreen">
        <p className="font-bold text-center md:text-4xl ">
          Full List of Addresses
        </p>
      </div>
      <div className="w-full mt-12 ml-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>

        <p className="inline ml-8 text-lg font-bold">Filter By</p>

        <div className="mt-16">
          <p className="inline mr-8">State</p>
          {["WA", "CA", "OR", "ETC", "ETC"].map((state) => {
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
      <div className="w-full p-8 mt-18">
        <table {...getTableProps()} className="w-full">
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup, idx) => (
                // Apply the header row props
                <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column, idx) => (
                      // Apply the header cell props
                      <th
                        {...column.getHeaderProps()}
                        className="text-left"
                        key={idx}
                      >
                        {
                          // Render the header
                          column.render("Header")
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row, idx) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()} key={idx}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()}>
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
