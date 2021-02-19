export function getCurrentDate()
{
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date();
    return monthNames[date.getMonth()] + ' ' + date.getDay + ', ' + date.getFullYear;
}