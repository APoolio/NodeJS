import moment from 'moment'

export function getCurrentDate()
{
    const date = new Date();
    return moment(date).format('LL'); 
}