import React from "react";
import { useTable } from "react-table";

const Table = ({ apiData }) => {
  //   const data = React.useMemo(
  //     () => [
  //       {
  //         col1: "1",
  //         col2: "World",
  //         col3: "Yo",
  //       },
  //       {
  //         col1: "react-table",
  //         col2: "rocks",
  //       },
  //       {
  //         col1: "whatever",
  //         col2: "you want",
  //       },
  //     ],
  //     []
  //   );
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id", // accessor is the "key" in the data
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
    const date = new Date(property.created_at).toDateString("en-US");

    return {
      id: property.id,
      addr: property.address,
      city: property.city_state.split(", ")[0],
      state: property.city_state.split(", ")[1],
      zip: property.zip,
      created: date,
    };
  });
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div className="flex flex-wrap w-full mt-16 bg-white border-4 border-black rounded-md shadow-neub">
      <div className="flex-1 w-full h-20 bg-red-600 border-b-4">
        Full List of Addresses
      </div>
      <div className="w-full p-8">
        <table {...getTableProps()} className="w-full">
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()} className="text-left">
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
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
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
