// 1 create a movie array
let movies = []
const url = "https://striveschool-api.herokuapp.com/api/movies";
//const myToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzYxMDYzMDUsImV4cCI6MTYzNzMxNTkwNX0.coJwGNfHZHba2EmsENjQ - KPY - ZzrDFCnx24XJdM4Cko "
const headers = new Headers({
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzYxMDYzMDUsImV4cCI6MTYzNzMxNTkwNX0.coJwGNfHZHba2EmsENjQ - KPY - ZzrDFCnx24XJdM4Cko ",
    'Content-Type': 'application/JSON'
})

// 2 fetching data globally
const moviesFromServer = async() => {
    try {
        const res = await fetch("https://striveschool-api.herokuapp.com/api/movies", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzYzNTAwMTUsImV4cCI6MTYzNzU1OTYxNX0.n3EiY73kRn-XZI3-zHU12UBEbKbpl7ZID2ZxktYdFfc"
            }
        })
        if (!res.ok) {
            throw new Error(alert("bad request error!"));
        } else {
            const data = await res.json()
            movies = await data

        }
    } catch (error) { console.log(error) }
}

moviesFromServer()
console.log(movies)
    // 3 create a filtered array on genre query

// 4 insert a link with ID movie
// 5 display movies on the page