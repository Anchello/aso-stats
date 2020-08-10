import { CellProps } from 'react-table';
import { Link } from 'react-router-dom';
import React from 'react';
import { COLORS, EXPLORE_PATH } from '../constants';
import { IData } from '../services/stats';

const generateColumns = (onClickDelete: any, onClickShow: any) => [
  {
    Header: '',
    id: 'checkbox',
    Cell: () => (
      <input type="checkbox" />
    ),
  },
  {
    Header: 'Keyword',
    accessor: 'keyword',
  },
  {
    Header: '',
    id: 'explore',
    accessor: 'explore',
    Cell: ({ cell: { value } }: CellProps<object>) => (
      <Link
        className="button"
        to={{
          pathname: EXPLORE_PATH,
          search: `?keyword=${encodeURIComponent(value)}`,
        }}
      >
        Explore
      </Link>
    ),
  },
  {
    Header: 'Show',
    id: 'suggestions',
    accessor: 'suggestions',
    Cell: ({ cell: { value } }: CellProps<object>) => (
      <button
        className="button"
        onClick={() => {
          onClickShow();
        }}
      >
        {`Show (${value})`}
      </button>
    ),
  },
  {
    Header: 'Traffic Score',
    accessor: 'trafficScore',
  }, {
    Header: 'Rank',
    accessor: 'rank',
  }, {
    Header: 'Total Apps',
    accessor: 'totalApps',
  }, {
    Header: 'Color',
    accessor: 'color',
    Cell: ({ cell: { value } }: CellProps<object>) => (
      <span style={{ backgroundColor: COLORS[value] }} className="color" />
    ),
  },
  {
    Header: '',
    id: 'delete',
    accessor: 'id',
    Cell: ({ cell }: CellProps<object>) => (
      <button
        className="button"
        onClick={() => {
          onClickDelete(cell.row.index, cell.value);
        }}
      >
        Delete
      </button>
    ),
  },
];

const updateDataTable = (data: IData[], index: number, id: number): IData[] => {
  if (!data.length) return [];
  const deleteItem = data.splice(index, 1);

  if (deleteItem[0].id !== id) {
    const newIndex = data.findIndex((item: any) => item.id === id);
    if (newIndex > -1) {
      data.splice(newIndex, 1);
    }
  }

  return [...data];
};

export {
  generateColumns,
  updateDataTable,
};
