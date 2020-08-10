import React from 'react';
import { useTable, Column } from 'react-table';

import './StatsTable.scss';

interface IStatsTableProps {
  columns: Column<object>[];
  data: Array<any>;
}

const StatsTable: React.FC<IStatsTableProps> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <table {...getTableProps()} className="stats-table">
      <thead className="stats-table__header">
        {headerGroups.map((headerGroup) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <th className="stats-table__cell" {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <tr {...row.getRowProps()}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              {row.cells.map((cell) => <td className="stats-table__cell" {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StatsTable;
