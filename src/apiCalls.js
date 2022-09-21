const fetchData = (url) => {
    return fetch(url)
        .then(data => data.json())
}
const fetchAll = () => {
    return Promise.all([fetchData('http://localhost:3001/api/v1/travelers'), fetchData('http://localhost:3001/api/v1/trips'), fetchData('http://localhost:3001/api/v1/destinations')])
}

const fetchSingleTraveler = (id) => {
    return fetch(`http://localhost:3001/api/v1/travelers/` + id)
        .then(data => data.json())
}















export  { fetchAll }
export { fetchSingleTraveler }