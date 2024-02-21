import React, { useEffect, useState } from 'react';
import { Card } from '../../redux/reducers/cardReducer';
import data from '../../../public/table-data.json';

interface CardProps {
  card: Card;
  removeCard: () => void;
}

const TableCard: React.FC<CardProps> = ({ card, removeCard }) => {
  const [selected, setSelected] = useState<'7d' | '14d' | '30d'>('7d');
  const [page, setPage] = useState(1);

  useEffect(() => setPage(1), [selected]);
  return (
    <div
      className={
        'w-60 h-60 rounded-lg border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark ' +
        (card.bgColor == 'white'
          ? 'bg-white'
          : card.bgColor == 'black'
          ? 'bg-black'
          : card.bgColor == 'blue'
          ? 'bg-blue-800 text-gray'
          : '')
      }
    >
      <div className="w-full flex flex-row justify-between px-3 items-center py-2">
        <div
          className={
            'text-sm flex flex-row font-medium gap-4 w-8 ' +
            (card.bgColor != 'white' ? 'text-gray-3' : 'text-primary')
          }
        >
          <span
            onClick={() => setSelected('7d')}
            className={
              'cursor-pointer ' +
              (selected == '7d'
                ? 'border-b-2 ' +
                  (card.bgColor == 'blue' ? 'border-white' : 'border-primary')
                : '')
            }
          >
            7d
          </span>
          <span
            onClick={() => setSelected('14d')}
            className={
              'cursor-pointer ' +
              (selected == '14d'
                ? 'border-b-2 ' +
                  (card.bgColor == 'blue' ? 'border-white' : 'border-primary')
                : '')
            }
          >
            14d
          </span>
          <span
            onClick={() => setSelected('30d')}
            className={
              'cursor-pointer ' +
              (selected == '30d'
                ? 'border-b-2 ' +
                  (card.bgColor == 'blue' ? 'border-white' : 'border-primary')
                : '')
            }
          >
            30d
          </span>
        </div>
        <i
          onClick={removeCard}
          className={
            'fa-solid fa-xmark cursor-pointer ' +
            (card.bgColor != 'white' ? 'text-gray-3' : 'text-primary')
          }
        ></i>
      </div>
      <div className="w-full pr-4">
        <table className="w-full">
          <thead>
            {data.headers.map((v: any) => (
              <th>{v}</th>
            ))}
          </thead>
          <tbody>
            {data.rows[selected]
              .slice(page == 1 ? 0 : 4 * (page - 1), 4 * page)
              .map((v: any) => (
                <tr>
                  {v.map((cell: any) => (
                    <td className="text-center">{cell}</td>
                  ))}
                </tr>
              ))}
          </tbody>
          <tr>
            <td className="text-center font-bold">Total</td>
            {data.total[selected].map((cell: any) => (
              <td className="text-center">{cell}</td>
            ))}
          </tr>
        </table>
      </div>
      <div className="flex flex-row px-4 w-full justify-between items-center mt-3">
        {page == 1 ? (
          <div />
        ) : (
          <i
            onClick={() => setPage((p) => (p - 1 >= 1 ? p - 1 : 1))}
            className="fa-solid fa-angle-left cursor-pointer text-primary"
          />
        )}
        <div>
          {page} of{' '}
          {Math.floor(data.rows[selected].length / 4) +
            (Math.floor(data.rows[selected].length / 4) ==
            data.rows[selected].length / 4
              ? 0
              : 1)}
        </div>
        {page * 4 >= data.rows[selected].length ? (
          <div />
        ) : (
          <i
            onClick={() =>
              setPage((p) => (p + 1 < data.rows[selected].length ? p + 1 : 1))
            }
            className="fa-solid fa-angle-right cursor-pointer text-primary"
          />
        )}
      </div>
    </div>
  );
};

export default TableCard;
