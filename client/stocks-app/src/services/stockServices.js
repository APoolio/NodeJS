/*jshint esversion: 6 */ 

export async function getAllStocks() {

    const response = await fetch('/api/users');
    return await response.json();
}

export async function searchStock(data) {
    const response = await fetch(`/stock/${data}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'useQueryString': 'true'},
      })
    return await response.json();
}