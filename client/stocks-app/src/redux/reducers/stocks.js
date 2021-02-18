/*jshint esversion: 6 */ 
const initialState = [];

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
                    id: 1,
                    text: action.payload
                }
            ]
        }
        default:
            return state
    }
}