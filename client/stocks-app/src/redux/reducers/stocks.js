import { createEntityAdapter } from '@reduxjs/toolkit'

const initialState = [];
const stocksAdapter = createEntityAdapter()


export default function stocksReducer(state = initialState, action) 
{
    switch(action.type)
    {
        case 'stocks/addStock':
        {
            console.log('stocks/addStock');

            return [
                ...state,
                {
                    id: action.symbol,
                    data: action.data,
                    currentPrice: action.currentPrice,
                    previousClose: action.previousClose,
                }
            ]
        }
        case 'stocks/deleteStock':
        {
            return stocksAdapter.removeOne(action.stock);
        }
        default:
            return state;
    }
}