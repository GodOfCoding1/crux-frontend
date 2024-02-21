import React from 'react';
import { Card } from '../../redux/reducers/cardReducer';
import { Typography } from '@material-tailwind/react';

interface CardProps {
  card: Card;
  removeCard: () => void;
}

const SummaryCard: React.FC<CardProps> = ({ card, removeCard }) => {
  return (
    <div
      className={
        'w-80 h-50 rounded-lg border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark ' +
        (card.bgColor == 'white'
          ? 'bg-white'
          : card.bgColor == 'black'
          ? 'bg-black'
          : card.bgColor == 'blue'
          ? 'bg-blue-800'
          : '')
      }
    >
      <div className="w-full flex flex-row justify-between px-3 items-center py-3">
        <Typography
          className={
            'text-sm font-medium ' +
            (card.bgColor != 'white' ? 'text-gray-3' : 'text-primary')
          }
        >
          Today <i className="fa-solid fa-angle-down ml-2"></i>
        </Typography>
        <i
          onClick={removeCard}
          className={
            'fa-solid fa-xmark cursor-pointer ' +
            (card.bgColor != 'white' ? 'text-gray-3' : 'text-primary')
          }
        ></i>
      </div>
      <hr
        className={
          'border ' +
          (card.bgColor == 'white'
            ? 'text-primary'
            : card.bgColor == 'blue'
            ? 'text-gray'
            : '')
        }
      />
      <div className="w-full px-3 py-3">
        <Typography
          className={'text-sm ' + (card.bgColor == 'blue' ? 'text-gray' : '')}
        >
          {card.data}
        </Typography>
      </div>
    </div>
  );
};

export default SummaryCard;
