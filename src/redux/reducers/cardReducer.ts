import { createSlice } from '@reduxjs/toolkit';

export interface Card {
  id: number;
  type: 'data' | 'graph' | 'summary' | string;
  data: any;
  title: string;
  graphType?: string;
  bgColor: string;
}

export interface CardPayload {
  type: 'data' | 'graph' | 'summary' | string;
  data: any;
  title: string;
  graphType?: string;
  bgColor: string;
}

const initialState = {
  numOfCards: 0,
  cards: [] as Card[],
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (state, action: { payload: CardPayload }) => {
      state.cards.push({ id: state.numOfCards + 1, ...action.payload });
      state.numOfCards += 1;
    },
    deleteCard: (state, action: { payload: number }) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, deleteCard } = cardSlice.actions;

export default cardSlice.reducer;
