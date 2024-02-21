import React, { useState } from 'react';
import { Card } from '../../redux/reducers/cardReducer';
import BarGraph from '../Graphs/Bar-Graph';
import PieGraph from '../Graphs/PieGraph';
import LineGraph from '../Graphs/LineGraph';

interface CardProps {
  card: Card;
  removeCard: () => void;
}

const GraphCard: React.FC<CardProps> = ({ card, removeCard }) => {
  const [selected, setSelected] = useState<'7d' | '14d' | '30d'>('7d');

  return (
    <div
      className={
        'w-120 h-80 rounded-lg border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark ' +
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
            (card.bgColor == 'white' ? 'text-primary' : '')
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
      <div className="w-full h-65">
        {card.graphType == 'bar' ? (
          <BarGraph
            selected={selected}
            color={card.bgColor == 'blue' ? 'white' : 'gray'}
          />
        ) : card.graphType == 'pie' ? (
          <PieGraph />
        ) : (
          <LineGraph
            selected={selected}
            color={card.bgColor == 'blue' ? 'white' : 'gray'}
          />
        )}
      </div>
    </div>
  );
};

export default GraphCard;
