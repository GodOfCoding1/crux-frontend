import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { useDispatch, useSelector } from 'react-redux';
import SummaryCard from '../../components/Cards/SummaryCard';
import TableCard from '../../components/Cards/TableCard';
import GraphCard from '../../components/Cards/GraphCard';
import { Card, deleteCard } from '../../redux/reducers/cardReducer';
import { Typography } from '@material-tailwind/react';

const Dashboard: React.FC = () => {
  const cardsState = useSelector(
    (state: { card: { numOfCards: number; cards: Card[] } }) => state.card,
  );
  const dispatch = useDispatch();
  const removeCard = (id: number) => {
    dispatch(deleteCard(id));
  };

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        {cardsState.cards.length > 0 ? (
          cardsState.cards.map((v, i) =>
            v.type == 'summary' ? (
              <SummaryCard
                key={i}
                card={v}
                removeCard={() => removeCard(v.id)}
              />
            ) : v.type == 'table' ? (
              <TableCard key={i} card={v} removeCard={() => removeCard(v.id)} />
            ) : (
              <GraphCard key={i} card={v} removeCard={() => removeCard(v.id)} />
            ),
          )
        ) : (
          <Typography>Add widgets and it will show up here..</Typography>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
